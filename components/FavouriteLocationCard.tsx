import React from "react";
import { Button, ButtonText, Text, View } from "@gluestack-ui/themed";
import { Location } from "../types/Location";
import { useGetHalls } from "../halls/halls.hooks";
import { useGetStatuses } from "../statuses/statuses.hooks";
import {
  getHallsStatus,
  getLocationStatus,
  getColorStatus,
  statusColorMap,
} from "../utils/colorStatus";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FavouritesStackParamList } from "../navigation/FavouritesStackParamList";
type Props = {
  location: Location;
};

type NavigationProps = {
  navigation: NativeStackScreenProps<
    FavouritesStackParamList,
    "FavouritesScreen"
  >;
  navigate: (screen: string) => void;
};

const FavouriteLocationCard = ({ location }: Props) => {
  const navigation = useNavigation<NavigationProps>();

  const { data: halls } = useGetHalls(location?.location_id);
  const { data: statuses } = useGetStatuses();

  if (!halls || !statuses) return null;
  const hallsStatus = getHallsStatus({ halls, statuses });
  const locationStatus = getLocationStatus(hallsStatus as string[]);
  const colorClass = getColorStatus({ locationStatus, statusColorMap });
  return (
    <View className="flex pb-6">
      <View className="bg-primaryGreen h-1 w-full" />
      <View className="flex-row items-center justify-between gap-2 w-full">
        <View className="px-4 w-[60%]">
          <Text
            className="text-lg uppercase font-bold text-primaryGreen"
            color={`${colorClass}`}
          >
            {locationStatus}
          </Text>
          <Text className="text-white text-xl">
            {location.address.split(" ").pop()}
          </Text>
          <Text className="text-white underline">{location.address}</Text>
        </View>
        <View className="skew-x-[-20deg] bg-primaryGreen w-full">
          <Button
            className="skew-x-[20deg] p-8 flex item-center"
            onPress={() => navigation.navigate("Package")}
          >
            <ButtonText className="text-white text-2xl font-bold pl-6">
              Select
            </ButtonText>
          </Button>
        </View>
      </View>
      <View className="bg-primaryGreen h-1 w-full" />
    </View>
  );
};

export default FavouriteLocationCard;
