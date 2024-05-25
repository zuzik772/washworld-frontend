import { Linking } from "react-native";
import * as CurrentLocation from "expo-location";

type Props = {
  setMapRegion: (value: any) => void;
};

export const userLocation = async ({ setMapRegion }: Props) => {
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

export const openGoogleMaps = (latitude: number, longitude: number) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
  Linking.canOpenURL(url)
    .then(() => Linking.openURL(url))
    .catch((err) => console.error("An error occurred", err));
};

export const calculateDistance = (
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
