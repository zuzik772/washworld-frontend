import React from "react";
import { Button, ButtonText, Text, View } from "@gluestack-ui/themed";
import { location } from "../types/Location";
import { getStatusColor } from "../utils/Status";

type Props = {
  location: location;
};
const FavouriteLocationCard = ({ location }: Props) => {
  const colorClass = getStatusColor(location.status);
  return (
    <View className="flex mb-6">
      <View className="bg-primaryGreen h-1 w-full" />
      <View className="flex-row items-center justify-between gap-2 w-full">
        <View className="px-4 w-[60%]">
          <Text className="text-lg uppercase font-bold" color={`${colorClass}`}>
            {location.status}
          </Text>
          <Text className="text-white text-xl">
            {location.address.split(" ").pop()}
          </Text>
          <Text className="text-white underline">{location.address}</Text>
        </View>
        <View className="skew-x-[-20deg] bg-primaryGreen w-full">
          <Button className="skew-x-[20deg] p-8 flex item-center ">
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
