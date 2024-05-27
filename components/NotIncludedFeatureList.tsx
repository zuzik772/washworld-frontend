import React from "react";
import {
  Icon,
  CheckCircleIcon,
  Text,
  View,
  CloseIcon,
} from "@gluestack-ui/themed";
import { Feature } from "../types/Membership";

interface NotIncludedFeatureListProps {
  allFeatures: Feature[];
  features: Feature[];
}

const NotIncludedFeatureList: React.FC<NotIncludedFeatureListProps> = ({
  allFeatures,
  features,
}) => {
  const filteredFeatures = allFeatures.filter(
    (feature) => !features.some((f) => f.feature_name === feature.feature_name)
  );

  return (
    <View className="flex gap-2 mb-3">
      {filteredFeatures.map((feature, index) => (
        <View className="flex flex-row items-center" key={index}>
          <Icon
            as={CloseIcon}
            width={15}
            height={15}
            color="$primaryWhite"
            fill="$primaryGreen"
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

export default NotIncludedFeatureList;
