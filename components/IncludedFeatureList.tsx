import React from "react";
import {
  Icon,
  CheckCircleIcon,
  Text,
  View,
  CloseIcon,
} from "@gluestack-ui/themed";
import { Feature } from "../types/Membership";

interface IncludedFeatureListProps {
  allFeatures: Feature[];
  features: Feature[];
  isAlternative: boolean; // Add this line
}

const IncludedFeatureList: React.FC<IncludedFeatureListProps> = ({
  allFeatures,
  features,
  isAlternative,
}) => {
  const filteredFeatures = allFeatures.filter((feature) =>
    features.some((f) => f.feature_name === feature.feature_name)
  );

  return (
    <View className="flex gap-2 mb-3">
      {features.map((feature, index) => (
        <View className="flex flex-row items-center" key={index}>
          <Icon
            as={CheckCircleIcon}
            width={15}
            height={15}
            color="$secondaryGray90"
            fill={isAlternative ? "$secondaryOrange" : "$primaryGreen"} // Update this line
            marginRight={7}
          />
          <Text className="text-primaryWhite text-lg">
            {feature.feature_name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default IncludedFeatureList;
