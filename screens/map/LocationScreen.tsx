import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native"; // Import ScrollView
import Layout from "../../components/Layout";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import {
  Text,
  Heading,
  Icon,
  ClockIcon,
  GlobeIcon,
  Box,
  Button,
  ScrollView,
} from "@gluestack-ui/themed";
import BadgesList from "../../components/BadgesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";

type LocationScreenProps = NativeStackScreenProps<MapStackParamList>;

const FavouritesScreen = ({ navigation }: LocationScreenProps) => {
  const [readyBoxHeight, setReadyBoxHeight] = useState(10);
  const location = useSelector((state: RootState) => state.location);

  function getStatusColor(status: string) {
    switch (status) {
      case "Ready":
        return "color-primaryWhite";
      case "Busy":
        return "color-secondaryOrange";
      case "Closed":
        return "color-tertiaryAlert";
      default:
        return "color-primaryWhite";
    }
  }

  return (
    <Layout>
      <View>
        <View className="h-2/6 w-full relative">
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
                  location.status
                )}`}
              >
                {location.status}
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
        <View className="h-4/6 ml-5 mr-5">
          <Heading fontSize={40} color="$primaryWhite">
            {location.name}
          </Heading>
          <View className="w-5/12 flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-1">
              <Icon
                width={16}
                height={16}
                color="$primaryGreen"
                as={ClockIcon}
              />
              <Text color="$primaryWhite" fontSize={15}>
                {location.openingTime}
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
          {/* <View className="my-7 gap-3 flex flex-row flex-wrap justify-center items-center ">
            <View className="gap-3 flex flex-row justify-center items-center ">
              <Box className="bg-transparent p-2 border-2 rounded border-primaryGreen">
                <Text color="$primaryGreen">{location.badges[0]}</Text>
              </Box>
              <Box className="bg-transparent p-2 border-2 rounded border-primaryGreen">
                <Text color="$primaryGreen">{location.badges[1]}</Text>
              </Box>
            </View>
            <View className="gap-3 flex flex-row justify-center items-center ">
              <Box className="bg-transparent p-2 border-2 rounded border-primaryGreen">
                <Text color="$primaryGreen">{location.badges[3]}</Text>
              </Box>
              <Box className="bg-transparent p-2 border-2 rounded-sm border-primaryGreen">
                <Text color="$primaryGreen">{location.badges[2]}</Text>
              </Box>
            </View>
          </View> */}
          <BadgesList location={location}></BadgesList>
          <View className="flex justify-center items-center">
            <Button
              onPress={() => navigation.navigate("Package")}
              padding={10}
              backgroundColor="$primaryGreen"
            >
              <Text
                textTransform="uppercase"
                fontSize={25}
                fontWeight="bold"
                color="$primaryWhite"
              >
                Select Wash
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  fullWidthImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
