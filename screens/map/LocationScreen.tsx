import React, { useState } from "react";
import Layout from "../../components/Layout";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import {
  Text,
  Image,
  Heading,
  Icon,
  ClockIcon,
  GlobeIcon,
  Button,
  View,
} from "@gluestack-ui/themed";
import BadgesList from "../../components/BadgesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import NavButton from "../../components/NavButton";

type LocationScreenProps = NativeStackScreenProps<MapStackParamList>;

const FavouritesScreen = ({ navigation }: LocationScreenProps) => {
  const location = useSelector((state: RootState) => state.location);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const onLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  function getStatusColor(status: string) {
    switch (status) {
      case "Ready":
        return "color-primaryWhite font-bold text-lg";
      case "Busy":
        return "color-secondaryOrange font-bold text-lg";
      case "Closed":
        return "color-tertiaryAlert font-bold text-lg";
      default:
        return "color-primaryWhite font-bold text-lg";
    }
  }

  return (
    <Layout>
      <View>
        <View className="h-60 w-full relative">
          <Image
            className="h-full"
            alt="An image of the selected selfwash location"
            source={{
              uri: "https://washworld.dk/_next/image?url=https%3A%2F%2Fwashworld-wordpress-production.storage.googleapis.com%2Fwp-content%2Fuploads%2F2021%2F03%2F28140259%2FWashWorld_lokation-e1618300360483.jpg&w=828&q=65",
            }}
          />
          <View
            onLayout={onLayout}
            className="bg-primaryGreen absolute right-0 bottom-0 pr-3 py-1 z-10"
          >
            <Text className={getStatusColor(location.status)}>
              {location.status}
            </Text>
          </View>
          <View
            style={{
              width: dimensions.width,
              height: dimensions.height,
              transform: [{ skewX: "-40deg" }],
            }}
            className="bg-primaryGreen absolute right-4 bottom-0 w-10 h-10"
          ></View>
        </View>
        <View className="flex-row">
          <View
            className="flex-1 h-1 bg-primaryGreen"
            style={{
              transform: [{ skewX: "-40deg" }],
            }}
          />
          <View style={{ width: dimensions.width + 28 }} />
        </View>
        <View className="ml-5 mr-5">
          <Heading fontSize={37} className="text-primaryWhite">
            {location.name}
          </Heading>
          <View className="w-40 flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-1">
              <Icon as={ClockIcon} className="w-4 h-4 color-primaryGreen" />
              <Text color="$primaryWhite" fontSize={15}>
                {location.openingTime}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Icon className="w-4 h-4 color-primaryGreen" as={GlobeIcon} />
              <Text className="text-primaryWhite text-base">
                {location.distance}km
              </Text>
            </View>
          </View>
          <BadgesList location={location}></BadgesList>
          <View className="flex justify-center items-center">
            {/* <NavButton
              title={"Select Wash"}
              onPress={() => navigation.navigate("Package")}
            ></NavButton> */}
            <Button
              className="p-2 bg-primaryGreen"
              onPress={() => navigation.navigate("Package")}
            >
              <Text className="uppercase text-xl font-bold text-primaryWhite">
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
