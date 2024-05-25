import Layout from "../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";
import NavButton from "../components/NavButton";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Linking } from "react-native";
import { useEffect, useState } from "react";
import * as CurrentLocation from "expo-location";
import {
  Text,
  View,
  CloseIcon,
  Icon,
  Pressable,
  FavouriteIcon,
} from "@gluestack-ui/themed";

import MapIcon from "../components/MapIcon";
import { useGetLocations } from "../locations/locations.hooks";
import { useGetHalls } from "../halls/halls.hooks";
import { useGetStatuses } from "../statuses/statuses.hooks";
import { Location } from "../types/Location";

type Props = NativeStackScreenProps<MapStackParamList, "MapScreen">;

const MapScreen = ({ navigation }: Props) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 55.676098,
    longitude: 12.568337,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [isFavourite, setIsFavourite] = useState(false);
  const { data: locations, isPending, isError, error } = useGetLocations();

  const userLocation = async () => {
    let { status } = await CurrentLocation.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let location = await CurrentLocation.getCurrentPositionAsync({
      accuracy: CurrentLocation.Accuracy.High,
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
      .then(() => Linking.openURL(url))
      .catch((err) => console.error("An error occurred", err));
  };
  useEffect(() => {
    userLocation();
  }, []);

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const locationTitle = selectedLocation?.address.split(" ").pop();

  const LocationCard = ({ location }: { location: Location }) => {
    const { data: halls } = useGetHalls(location?.location_id);
    const { data: statuses } = useGetStatuses();

    const hallsStatusIds = halls?.map((hall) => hall.status_id);

    const hallsStatus = hallsStatusIds?.map((id) => {
      const statusObj = statuses?.find((status) => status.status_id === id);
      return statusObj ? statusObj.status : undefined;
    });

    const statusColorMap = {
      Ready: "#0ECC6D",
      Busy: "#ff6b06",
      Unavailable: "#d71515",
    };

    let locationStatus: string = "";
    let colorClass: string = "";

    if (hallsStatus?.includes("Ready")) {
      locationStatus = "Ready";
    } else if (
      !hallsStatus?.includes("Ready") &&
      hallsStatus?.includes("Busy")
    ) {
      locationStatus = "Busy";
    } else if (hallsStatus?.every((status) => status === "Busy")) {
      locationStatus = "Busy";
    } else if (hallsStatus?.every((status) => status === "Unavailable")) {
      locationStatus = "Unavailable";
    }

    colorClass = statusColorMap[locationStatus as keyof typeof statusColorMap];

    const navigateToLocation = () =>
      openGoogleMaps(location.latitude, location.longitude);

    const calculatedDistance = calculateDistance(
      mapRegion.latitude,
      mapRegion.longitude,
      location.latitude,
      location.longitude
    );
    const distance = calculatedDistance.toFixed(1);
    return (
      <View className="absolute bottom-[180px] left-4 right-4 mx-auto p-3 bg-secondaryGray90 flex gap-2 rounded-lg">
        <View className="w-10 h-10 absolute right-2 top-2">
          <Pressable onPress={() => setSelectedLocation(null)}>
            <Icon as={CloseIcon} color="$colors$primaryWhite" />
          </Pressable>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="w-9 h-9">
            <Pressable
              onPress={() => setIsFavourite((prevState) => !prevState)}
            >
              <Icon
                as={FavouriteIcon}
                color={
                  isFavourite ? "$colors$primaryGreen" : "$colors$primaryWhite"
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
          {locationStatus}
        </Text>

        <View className="flex-row gap-2 items-center justify-between">
          <NavButton
            title="Navigation"
            onPress={navigateToLocation}
            secondary={true}
          />
          <NavButton
            title="Select"
            onPress={() =>
              navigation.navigate("Location", {
                locationTitle: locationTitle,
                distance: parseFloat(distance),
                locationId: location.location_id,
                locationStatus: locationStatus,
              })
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
});
export default MapScreen;
