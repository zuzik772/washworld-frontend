import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Layout from "../../components/Layout";
import {
  Text,
  Heading,
  Icon,
  ClockIcon,
  GlobeIcon,
  View,
  Image,
} from "@gluestack-ui/themed";
import BadgesList from "../../components/BadgesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import NavButton from "../../components/NavButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type LocationScreenProps = NativeStackScreenProps<MapStackParamList>;

const LocationScreen = ({ navigation, route }: LocationScreenProps) => {
  const { locationId, distance, locationStatus } = route.params;

  const locations = useSelector((state: RootState) => state.location.locations);

  const [textWidth, setTextWidth] = useState(0);

  function getStatusColor(status: string | undefined) {
    switch (status) {
      case "Ready":
        return "primaryGreen";
      case "Busy":
        return "secondaryOrange";
      case "Unavailable":
        return "tertiaryAlert";
      default:
        return "primaryGreen";
    }
  }

  return (
    <Layout>
      <View className="flex ">
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
            className={`h-9 absolute bottom-0 right-0 bg-${getStatusColor(
              locationStatus
            )}`}
          />
          <View className="absolute bottom-0 right-0 ">
            <Text
              onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setTextWidth(width);
              }}
              className={`text-lg p-2 pr-4 py-1 font-bold text-primaryWhite  bg-${getStatusColor(
                locationStatus
              )}`}
            >
              {locationStatus}
            </Text>
          </View>
        </View>
        <View className={`h-1 bg-${getStatusColor(locationStatus)}`} />

        {locations?.map((location, index) => {
          if (location.location_id === locationId) {
            return (
              <View className="mx-5" key={index}>
                <Heading color="$primaryWhite" fontSize={20}>
                  {location.address}
                </Heading>
                <View className="w-4/6 flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center gap-1">
                    <Icon
                      width={16}
                      height={16}
                      color="$primaryGreen"
                      fill="$colors$secondaryGray90"
                      as={ClockIcon}
                    />
                    <Text color="$primaryWhite" fontSize={15}>
                      {location.opening_times == 0 &&
                      location.closing_times == 0
                        ? "24/7"
                        : `${location.opening_times}-${location.closing_times}`}
                    </Text>
                  </View>
                  <View className="flex flex-row items-center gap-1">
                    <Icon
                      width={16}
                      height={16}
                      color="$primaryGreen"
                      fill="$colors$secondaryGray90"
                      as={GlobeIcon}
                    />
                    <Text color="$primaryWhite" fontSize={15}>
                      {distance}km
                    </Text>
                  </View>
                </View>
                <BadgesList locationId={locationId} />
              </View>
            );
          }
        })}

        <View className="flex items-center justify-center">
          <NavButton
            title="Select Wash"
            onPress={() => navigation.navigate("Package")}
          />
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
