import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Layout from "../../components/Layout";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import {
  Text,
  Heading,
  Icon,
  ClockIcon,
  GlobeIcon,
  Button,
  View,
  Image,
  ScrollView,
} from "@gluestack-ui/themed";
import BadgesList from "../../components/BadgesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { SelfWash, Hall } from "../../types/Location";
import NavButton from "../../components/NavButton";

type LocationScreenProps = NativeStackScreenProps<MapStackParamList>;

const LocationScreen = ({ navigation, route }: LocationScreenProps) => {
  const { locationTitle, distance } = route.params;

  const [textWidth, setTextWidth] = useState(0);

  const location = useSelector(
    (state: RootState) => state.location.locations[0] // 0 will become the clicked location's id
  );

  const locationStatus = (self_wash: SelfWash[], halls: Hall[]) => {
    if (
      // self_wash.some((sw) => sw.status.status === "Ready") ||
      halls.some((hall) => hall.status.status === "Ready")
    ) {
      return "Ready";
    } else if (
      // self_wash.every((sw) => sw.status.status === "Busy") ||
      halls.every((hall) => hall.status.status === "Busy")
    ) {
      return "Busy";
    } else {
      return "Unavailable";
    }
  };

  function getStatusColor(status: string) {
    switch (status) {
      case "Ready":
        return "color-primaryWhite";
      case "Busy":
        return "color-secondaryOrange";
      case "Unavailable":
        return "color-tertiaryAlert";
      default:
        return "color-primaryWhite";
    }
  }

  return (
    <Layout>
      <View className="flex">
        <View className="h-64 w-full relative">
          <Image
            alt="Location image"
            style={styles.fullWidthImage}
            source={{
              uri: "https://washworld.dk/_next/image?url=https%3A%2F%2Fwashworld-wordpress-production.storage.googleapis.com%2Fwp-content%2Fuploads%2F2021%2F03%2F28140259%2FWashWorld_lokation-e1618300360483.jpg&w=828&q=65",
            }}
          />
          <View
            style={{
              width: textWidth * 1.2,
              transform: [{ skewX: "-34deg" }],
            }}
            className="bg-primaryGreen h-9 absolute bottom-0 right-0"
          />
          <View className="absolute bottom-0 right-0">
            <Text
              onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setTextWidth(width);
              }}
              className={`text-lg px-3 py-1 font-bold bg-primaryGreen ${getStatusColor(
                locationStatus(
                  location.self_wash_stations,
                  location.washing_halls
                )
              )}`}
            >
              {locationStatus(
                location.self_wash_stations,
                location.washing_halls
              )}
            </Text>
          </View>
        </View>

        {locationStatus(location.self_wash_stations, location.washing_halls) ===
        "Unavailable" ? (
          <View
            style={{
              width: textWidth * 2.1,
              transform: [{ skewX: "-34deg" }],
            }}
            className="h-1 bg-primaryGreen"
          />
        ) : locationStatus(
            location.self_wash_stations,
            location.washing_halls
          ) === "Busy" ? (
          <View
            style={{
              width: textWidth * 4.92,
              transform: [{ skewX: "-34deg" }],
            }}
            className="h-1 bg-primaryGreen"
          />
        ) : (
          <View
            style={{
              width: textWidth * 4.07,
              transform: [{ skewX: "-34deg" }],
            }}
            className="h-1 bg-primaryGreen"
          />
        )}

        <View className="ml-5 mr-5">
          <Heading fontSize={40} color="$primaryWhite">
            {locationTitle}
          </Heading>
          <View className="w-4/6 flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-1">
              <Icon
                width={16}
                height={16}
                color="$primaryGreen"
                as={ClockIcon}
              />
              <Text color="$primaryWhite" fontSize={15}>
                {location.opening_times} - {location.closing_times}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Icon
                width={16}
                height={16}
                color="$primaryGreen"
                as={GlobeIcon}
              />
              <Text color="$primaryWhite" fontSize={15}>
                {distance}km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <BadgesList location={location} />
      <View className="flex items-center justify-center">
        <NavButton
          title="Select Wash"
          onPress={() => navigation.navigate("Package")}
        />
      </View>
    </Layout>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  fullWidthImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
