import React from "react";
import { Package } from "../types/Subscription";

import {
  Icon,
  CheckCircleIcon,
  Text,
  View,
  SlashIcon,
} from "@gluestack-ui/themed";

const PackageCard: React.FC<{ subscription: Package }> = ({ subscription }) => {
  return (
    <View className="border-2 border-primaryGreen p-5 mr-4">
      <View className="flex justify-center items-center mb-3">
        <Icon
          color="$primaryGreen"
          as={CheckCircleIcon}
          width={45}
          height={45}
        />
        <Text className="text-primaryWhite font-bold text-lg">
          {subscription.name}
        </Text>
      </View>
      {subscription.allFeatures.map((feature, featureIndex) => (
        <View
          key={featureIndex}
          className="flex justify-start items-start mb-3"
        >
          <View className="flex flex-row justify-center items-center gap-2">
            <Icon
              color="$primaryGreen"
              as={
                subscription.includedFeatures.includes(feature)
                  ? CheckCircleIcon
                  : SlashIcon
              }
              width={15}
              height={15}
            />
            <Text className="text-primaryWhite font-bold">{feature}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PackageCard;
