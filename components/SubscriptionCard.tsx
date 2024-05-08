import { Button, CheckIcon, Heading, Icon } from "@gluestack-ui/themed";
import React from "react";
import { View, Text } from "react-native";
import { Subscription } from "../types/subscription";

interface SubscriptionCardProps {
  subscription: Subscription;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
}) => {
  return (
    <View className="mr-4 border-2 border-primaryGreen p-5">
      <View className="flex justify-center items-center ">
        <View className="p-2 border-2 bg-primaryGreen rounded-full border-primaryGreen w-10 h-10 justify-center items-center">
          <Icon
            width={20}
            height={20}
            color="$secondaryGray90"
            as={CheckIcon}
          />
        </View>
        <Heading className="text-primaryWhite">{subscription.name}</Heading>
      </View>
      <View className="flex gap-2">
        {subscription.allFeatures.map((feature, index) => (
          <View
            className="flex flex-row gap-2 justify-start items-center"
            key={index}
          >
            <View className="bg-primaryGreen rounded-full border-primaryGreen">
              <Icon
                width={15}
                height={15}
                color="$secondaryGray90"
                as={CheckIcon} //try using zuzana's component & check circle icon
              />
            </View>
            <Text className="text-primaryWhite">{feature}</Text>
          </View>
        ))}
        <View className="flex justify-center items-center mt-5 mb-3">
          <Button className="p-3 bg-primaryGreen">
            <Text className="uppercase font-bold color-primaryWhite text-lg">
              Select
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SubscriptionCard;
