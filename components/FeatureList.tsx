import React from "react";
import {
  Icon,
  CheckCircleIcon,
  Text,
  View,
  CloseIcon,
} from "@gluestack-ui/themed";
import { Feature } from "../types/Membership";

interface FeatureListProps {
  features: Feature[];
  isIncluded: boolean;
  isAlternative: boolean;
}

const FeatureList: React.FC<FeatureListProps> = ({
  features,
  isIncluded,
  isAlternative,
}) => {
  return (
    <View className="flex gap-2 mb-3">
      {features.map((feature, index) => (
        <View className="flex flex-row items-center" key={index}>
          <Icon
            as={isIncluded ? CheckCircleIcon : CloseIcon}
            width={15}
            height={15}
            color={
              !isIncluded
                ? "$primaryWhite"
                : isAlternative
                ? "$secondaryGray90"
                : "$primaryGreen"
            }
            fill={isAlternative ? "$secondaryOrange" : undefined}
            marginRight={7}
          />
          <Text className="text-primaryWhite text-lg">{feature.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default FeatureList;
