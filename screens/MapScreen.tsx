import Layout from "../components/Layout";
import { MapStackParamList } from "../navigation/MapStackParamList";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Center, Spinner, Text, View } from "@gluestack-ui/themed";
import MapIcon from "../components/MapIcon";
import { Hall, Location, Status } from "../types/Location";
import { userLocation } from "../utils/mapCalculations";
import LocationCard from "../components/LocationCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLocations } from "../store/locationSlice";
import {
  getHallsStatus,
  getLocationStatus,
  getColorStatus,
  statusColorMap,
} from "../utils/colorStatus";
import axios from "axios";
import fetchStatuses from "../statuses/statuses.queries";
import fetchHalls from "../halls/halls.queries";

type Props = {
  navigation: NativeStackNavigationProp<MapStackParamList, "MapScreen">;
};
const MapScreen = ({ navigation }: Props) => {
  const locations = useSelector((state: RootState) => state.location.locations);
  const [statusTypes, setStatusTypes] = useState<Status[]>([]);
  const [halls, setHalls] = useState<{ location_id: number; halls: Hall[] }[]>(
    []
  );
  useEffect(() => {
    fetchStatuses().then((data) => {
      setStatusTypes(data);
    });
  }, []);

  useEffect(() => {
    const hallArray: { location_id: number; halls: Hall[] }[] = [];
    locations.map(async (location) => {
      const halls = await fetchHalls(location.location_id);

      const object = { location_id: location.location_id, halls };
      hallArray.push(object);
    });
    setHalls(hallArray);
  }, [locations]);

  const dispatch: AppDispatch = useDispatch();

  const getLocationStatusAndHalls = async (location_id: number) => {
    return new Promise<{
      hallsStatus: ("Ready" | "Busy" | "Unavailable" | undefined)[];
      locationStatus: string;
      colorClass: string;
    }>(async (resolve, reject) => {
      if (!halls.length || !statusTypes.length) return null;

      const hallsStatus = getHallsStatus({
        halls:
          halls.find((hall) => hall.location_id === location_id)?.halls || [],
        statuses: statusTypes,
      });
      const locationStatus = getLocationStatus(hallsStatus as string[]);
      const colorClass = getColorStatus({ locationStatus, statusColorMap });
      resolve({ hallsStatus, locationStatus, colorClass });
    });
  };

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
          {locations.length ? (
            <>
              {locations?.map(async (location) => {
                const status = await getLocationStatusAndHalls(
                  location.location_id
                );

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
                    <MapIcon fillColor={status.colorClass} />
                  </Marker>
                );
              })}
            </>
          ) : (
            <>
              {/* <View className="bg-primaryGreen p-4 flex items-center justify-center">
                <Spinner color="white" />
              </View> */}
            </>
          )}
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
