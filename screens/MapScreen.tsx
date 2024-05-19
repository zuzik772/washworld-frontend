import Layout from "../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";
import NavButton from "../components/NavButton";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Linking } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import {
  Text,
  View,
  CloseIcon,
  Icon,
  Pressable,
  Button,
  ButtonText,
  FavouriteIcon,
} from "@gluestack-ui/themed";

import { getStatusColor } from "../utils/Status";
import MapIcon from "../components/MapIcon";
import {
  useGetLocations,
  useUpdateLocation,
} from "../locations/locations.hooks";
import { location } from "../types/location";

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
  //const [isFavouriteLocation, setIsFavouriteLocation] = useState(false);
  // const [locations, setLocations] = useState<location[]>(initialLocations);

  const { data: locations, isPending, isError, error } = useGetLocations();
  const { mutate: updateLocation } = useUpdateLocation();

  const handleUpdateLocation = () => {
    if (selectedLocation) {
      const updatedLocationData = {
        ...selectedLocation,
        isFavourite: !selectedLocation.isFavourite,
      };
      console.log("current fav is", updatedLocationData.isFavourite);
      updateLocation(updatedLocationData, {
        onSuccess: () => {
          // Update the selectedLocation state to reflect the change
          setSelectedLocation(updatedLocationData);
        },
      });
    }
  };
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

  const openGoogleMaps = (latitude: number, longitude: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open this URL: " + url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };
  useEffect(() => {
    userLocation();
  }, []);

  const locationTitle = selectedLocation?.address.split(" ").pop();

  const LocationCard = ({ location }: { location: location }) => {
    const colorClass = getStatusColor(location.status);
    const navigateToLocation = () =>
      openGoogleMaps(location.latitude, location.longitude);

    return (
      <View className="absolute bottom-[180px] left-4 right-4 mx-auto p-3 bg-secondaryGray90 flex gap-2 rounded-lg">
        <View className="w-10 h-10 absolute right-2 top-2">
          <Pressable onPress={() => setSelectedLocation(null)}>
            <Icon as={CloseIcon} color="$colors$primaryWhite" />
          </Pressable>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="w-9 h-9">
            <Pressable onPress={handleUpdateLocation}>
              <Icon
                as={FavouriteIcon}
                color={
                  location.isFavourite
                    ? "$colors$primaryGreen"
                    : "$colors$primaryWhite"
                }
              />
            </Pressable>
          </View>
          <Text className="text-primaryWhite text-xl font-semibold">
            {locationTitle}
          </Text>
        </View>
        <Text className="text-primaryWhite underline">{location.address}</Text>

        <Text className="font-bold text-lg" color={`${colorClass}`}>
          {location.status}
        </Text>

        <View className="flex-row gap-2 items-center justify-between">
          <Button
            padding={10}
            className="border-[1px] border-primaryWhite w-48"
            onPress={navigateToLocation}
          >
            <ButtonText className={"text-xl text-center uppercase text-white"}>
              Navigation
            </ButtonText>
          </Button>
          <NavButton
            title="Select"
            onPress={() =>
              navigation.navigate("Location", { locationTitle: locationTitle })
            }
            disabled={false}
          />
        </View>
      </View>
    );
  };
  if (isPending) return <Text>Loading...</Text>;
  if (isError) return <Text>Error: {error.message}</Text>;
  return (
    <Layout>
      <View className="relative">
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Current Location" />
          {locations?.map((location) => (
            <Marker
              key={location.location_id}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.address}
              onPress={() => setSelectedLocation(location)}
            >
              <MapIcon fillColor={getStatusColor(location.status)} />
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
});
export default MapScreen;
