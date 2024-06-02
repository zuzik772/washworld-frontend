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
import fetchStatuses from "../statuses/statuses.queries";
import fetchHalls from "../halls/halls.queries";

type Props = {
  navigation: NativeStackNavigationProp<MapStackParamList, "MapScreen">;
};
const MapScreen = ({ navigation }: Props) => {
  const locations = useSelector((state: RootState) => state.location.locations);
  const [statusTypes, setStatusTypes] = useState<Status[]>([]);
  const [halls, setHalls] = useState<
    {
      location_id: number;
      halls: Hall[];
      address: string;
      latitude: number;
      longitude: number;
    }[]
  >([]);

  const [markerData, setMarkerData] = useState<
    {
      location: Location;
      hallsStatus: ("Ready" | "Busy" | "Unavailable" | undefined)[];
      locationStatus: string;
      colorClass: string;
    }[]
  >([]);

  useEffect(() => {
    fetchStatuses().then((data) => {
      setStatusTypes(data);
    });
  }, []);

  useEffect(() => {
    Promise.all(
      locations.map(async (location) => {
        const halls = await fetchHalls(location.location_id);

        const object = {
          location_id: location.location_id,
          halls,
          address: location.address,
          latitude: location.latitude,
          longitude: location.longitude,
        };
        return object;
      })
    ).then((hallArray) => {
      setHalls(hallArray);
    });
  }, [locations]);

  useEffect(() => {
    if (halls.length && statusTypes.length) {
      Promise.all(
        halls.map(async (hall) => {
          const data = await getLocationStatusAndHalls(
            hall.location_id,
            hall.halls
          );

          const location = locations.find(
            (loc) => loc.location_id === hall.location_id
          ) as Location;

          return {
            location,
            hallsStatus: data.hallsStatus,
            locationStatus: data.locationStatus,
            colorClass: data.colorClass,
          };
        })
      ).then((data) => {
        setMarkerData(data);
      });
    }
  }, [halls, statusTypes]);

  const dispatch: AppDispatch = useDispatch();

  const getLocationStatusAndHalls = async (
    location_id: number,
    allHalls: Hall[]
  ) => {
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
        {selectedLocation && (
          <LocationCard
            location={selectedLocation}
            mapRegion={mapRegion}
            setSelectedLocation={setSelectedLocation}
            navigation={navigation}
          />
        )}
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Current Location" />
          {markerData.map((marker) => {
            return (
              <Marker
                key={marker.location.location_id}
                coordinate={{
                  latitude: marker.location.latitude
                    ? Number(marker.location.latitude)
                    : 0,
                  longitude: marker.location.longitude
                    ? Number(marker.location.longitude)
                    : 0,
                }}
                title={marker.location.address}
                onPress={() => setSelectedLocation(marker.location)}
              >
                <MapIcon fillColor={marker.colorClass} />
              </Marker>
            );
          })}
        </MapView>
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
