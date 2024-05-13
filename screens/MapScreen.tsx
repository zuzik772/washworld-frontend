import Layout from "../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";
import NavButton from "../components/NavButton";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Text, View, CloseIcon, Icon, Pressable } from "@gluestack-ui/themed";
import { location, locations } from "../utils/locationsData";
import RandomStatus from "../utils/Status";
import MapIcon from "../components/MapIcon";

type Props = NativeStackScreenProps<MapStackParamList, "MapScreen">;
const MapScreen = ({ navigation }: Props) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 55.676098,
    longitude: 12.568337,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [selectedLocation, setSelectedLocation] = useState<location | null>(
    null
  );

  console.log("selected location", selectedLocation);
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };
  useEffect(() => {
    userLocation();
  }, []);

  const LocationCard = ({ location }: { location: location }) => (
    <View className="absolute bottom-[180px] left-4 right-4 mx-auto p-3 bg-secondaryGray90 flex gap-2 rounded-lg">
      <Pressable onPress={() => navigation.goBack()} className="relative">
        <View className="w-8 h-8 absolute right-0 top-0">
          <Icon as={CloseIcon} color="$colors$primaryWhite" />
        </View>
      </Pressable>
      <Text className="text-primaryWhite text-xl font-semibold">
        {location.address.split(" ").pop()}
      </Text>
      <Text className="text-primaryWhite">{location.address}</Text>
      <RandomStatus />
      <View className="flex-row gap-2 justify-between">
        <NavButton
          title="Navigation"
          onPress={() => console.log("navigation was clicked")}
          disabled={true}
        />
        <NavButton
          title="Select"
          onPress={() => navigation.navigate("Location")}
          disabled={false}
        />
      </View>
    </View>
  );

  return (
    <Layout>
      <View className="relative">
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Current Location" />
          {locations.map((location) => (
            <Marker
              key={location.location_id}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.address}
              onPress={() => setSelectedLocation(location)}
            >
              <MapIcon fillColor={"#0ECC6D"} />
            </Marker>
          ))}
        </MapView>
        {selectedLocation && <LocationCard location={selectedLocation} />}
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  card: {
    zIndex: 10,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default MapScreen;
