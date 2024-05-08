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
  Center,
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
            <Text className="text-primaryWhite text-lg font-bold  self-end">
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
        <View style={{ flexDirection: "row" }}>
          <View
            className="flex-1 h-1 bg-primaryGreen"
            style={{
              transform: [{ skewX: "-40deg" }],
            }}
          />
          <View style={{ width: dimensions.width + 28 }} />
        </View>
        <View className="ml-5 mr-5">
          <Heading fontSize={37} color="$primaryWhite">
            {location.name}
          </Heading>
          <View className=" w-40 flex flex-row justify-between items-center">
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
          <BadgesList location={location}></BadgesList>
          <View className="flex justify-center items-center">
            {/* <NavButton
              title={"Select Wash"}
              onPress={() => navigation.navigate("Package")}
            ></NavButton> */}
            <Button
              onPress={() => navigation.navigate("Package")}
              padding={8}
              backgroundColor="$primaryGreen"
            >
              <Text
                textTransform="uppercase"
                fontSize={20}
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
