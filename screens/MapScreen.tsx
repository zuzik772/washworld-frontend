import Layout from "../components/Layout";
import { MapStackParamList } from "../navigation/MapStackParamList";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { View } from "@gluestack-ui/themed";
import MapIcon from "../components/MapIcon";
import { Location } from "../types/Location";
import { userLocation } from "../utils/mapCalculations";
import LocationCard from "../components/LocationCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLocations } from "../store/locationSlice";

type Props = {
  navigation: NativeStackNavigationProp<MapStackParamList, "MapScreen">;
};
const MapScreen = ({ navigation }: Props) => {
  const locations = useSelector((state: RootState) => state.location.locations);

  const dispatch: AppDispatch = useDispatch();

  const [mapRegion, setMapRegion] = useState({
    latitude: 55.676098,
    longitude: 12.568337,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  useEffect(() => {
    dispatch(fetchAllLocations());
    userLocation({ setMapRegion });
  }, []);

  return (
    <Layout>
      <View className="relative">
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Current Location" />
          {locations?.map((location) => {
            return (
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
            );
          })}
        </MapView>
        {selectedLocation && (
          <LocationCard
            location={selectedLocation}
            mapRegion={mapRegion}
            setSelectedLocation={setSelectedLocation}
            navigation={navigation}
          />
        )}
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
