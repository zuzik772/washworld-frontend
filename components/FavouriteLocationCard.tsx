import { View, Text } from "react-native";
import React from "react";
import { Button, ButtonText } from "@gluestack-ui/themed";

const FavouriteLocationCard = () => {
  return (
    <View className="flex mb-6">
      <View className="bg-primaryGreen h-1 w-full" />
      <View className="flex-row items-center justify-between gap-2 w-full">
        <View className="px-4 w-[60%]">
          <Text className="text-white text-lg uppercase font-bold">Status</Text>
          <Text className="text-white text-xl">Title</Text>
          <Text className="text-white underline">Location address</Text>
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
