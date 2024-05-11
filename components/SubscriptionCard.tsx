import { StyleSheet } from "react-native";
import React from "react";
import { Icon, CheckCircleIcon, Text, View } from "@gluestack-ui/themed";

const SubscriptionCard = () => {
  return (
    <View className="flex justify-center items-center">
      <View className="border-2 border-primaryGreen p-5">
        <View className="flex justify-center items-center mb-3">
          <Icon
            color="$primaryGreen"
            as={CheckCircleIcon}
            width={45}
            height={45}
          ></Icon>
          <Text className="text-primaryWhite font-bold text-lg">Basic</Text>
        </View>
        <View className="flex justify-start items-start">
          <View className="flex flex-row justify-center items-center gap-2">
            <Icon
              color="$primaryGreen"
              as={CheckCircleIcon}
              width={15}
              height={15}
            ></Icon>
            <Text className="text-primaryWhite font-bold">Example 3213</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubscriptionCard;
