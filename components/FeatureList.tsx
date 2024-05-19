import React from "react";
import { Feature } from "../types/Membership";

import {
  Icon,
  CheckCircleIcon,
  Text,
  View,
  SlashIcon,
} from "@gluestack-ui/themed";

interface FeatureListProps {
  features: Feature[];
  isIncluded: boolean;
}

const FeatureList: React.FC<FeatureListProps> = ({ features, isIncluded }) => {
  return (
    <View className="flex gap-2 mb-3">
      {features.map((feature, index) => (
        <View className="flex flex-row items-center" key={index}>
          <Icon
            as={isIncluded ? CheckCircleIcon : SlashIcon}
            width={15}
            height={15}
            color="$primaryGreen"
            marginRight={7}
          />
          <Text className="text-primaryWhite text-lg">{feature.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default FeatureList;
