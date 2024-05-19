import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
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
  ScrollView,
} from "@gluestack-ui/themed";
import BadgesList from "../../components/BadgesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { Hall, SelfWash } from "../../types/Location";

type LocationScreenProps = NativeStackScreenProps<MapStackParamList>;

const LocationScreen = ({ navigation }: LocationScreenProps) => {
  const [readyBoxHeight, setReadyBoxHeight] = useState(10);
  const location = useSelector(
    (state: RootState) => state.location.locations[0]
  ); //

  const locationStatus = (self_wash: SelfWash[], halls: Hall[]) => {
    if (
      self_wash.some((sw) => sw.status.status === "Ready") ||
      halls.some((hall) => hall.status.status === "Ready")
    ) {
      return "Ready";
    } else if (
      self_wash.some((sw) => sw.status.status === "Busy") ||
      halls.some((hall) => hall.status.status === "Busy")
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
      <View className="">
        <View className="flex ">
          <View className="h-64 w-full relative">
            <Image
              style={styles.fullWidthImage}
              source={{
                uri: "https://washworld.dk/_next/image?url=https%3A%2F%2Fwashworld-wordpress-production.storage.googleapis.com%2Fwp-content%2Fuploads%2F2021%2F03%2F28140259%2FWashWorld_lokation-e1618300360483.jpg&w=828&q=65",
              }}
            />
            <View
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setReadyBoxHeight(height);
              }}
              className="absolute bottom-0 right-0 bg-primaryGreen py-1 z-10"
            >
              <View className="z-20 px-2">
                <Text
                  className={`-ml-2 text-lg font-bold ${getStatusColor(
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
              <View
                className={`absolute w-full right-3 bg-primaryGreen z-0 `}
                style={{
                  height: readyBoxHeight,
                  transform: [{ skewX: "-34deg" }],
                }}
              />
            </View>
          </View>
          <View
            className="w-12/12 h-1 bg-primaryGreen"
            style={{
              transform: [{ skewX: "-20deg" }],
            }}
          ></View>
          <View className="ml-5 mr-5">
            <Heading fontSize={40} color="$primaryWhite">
              {location.address}
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
                  {location.distance}km
                </Text>
              </View>
            </View>
          </View>
        </View>
        <BadgesList location={location}></BadgesList>
        <View className="flex items-center justify-center">
          <Button
            onPress={() => navigation.navigate("Package")}
            className="p-2 bg-primaryGreen"
          >
            <Text className="uppercase text-2xl font-bold text-primaryWhite">
              Select Wash
            </Text>
          </Button>
        </View>
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
