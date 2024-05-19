import React from "react";
import { Membership } from "../types/Membership";
import FeatureList from "./FeatureList";

import {
  Icon,
  CheckCircleIcon,
  Text,
  View,
  Button,
  Divider,
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native-gesture-handler";

type SubscriptionCardProps = {
  subscription: Membership;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
}) => {
  return (
    <ScrollView className="h-screen mb-32">
      <View className="border-2 border-primaryGreen p-5 mr-2 ml-2 relative">
        <View className="flex justify-center items-center mt-3 mb-3">
          <Icon
            color="$primaryGreen"
            as={CheckCircleIcon}
            width={45}
            height={45}
          />
          <Text className="text-primaryWhite font-bold text-2xl mt-1">
            {subscription.name}
          </Text>
        </View>

        <View className="flex flex-col mt-6">
          <Text className="text-primaryWhite text-center font-bold text-lg">
            Included
          </Text>
          <Divider className="w-80 h-px bg-primaryWhite self-center mb-3 mt-1" />
          <View className="self-start pl-6 mb-8">
            {subscription.packages.map((packageFeature, packageIndex) => (
              <FeatureList
                key={packageIndex}
                features={packageFeature.includedFeatures}
                isIncluded={true}
              />
            ))}
          </View>
        </View>

        {subscription.name !== "All Inclusive" && (
          <View className="flex flex-col">
            <Text className="text-primaryWhite text-center font-bold text-lg">
              Not Included
            </Text>
            <Divider className="w-80 h-px bg-primaryWhite self-center mb-3 mt-1" />
            <View className="self-start pl-6">
              {subscription.packages.map((packageFeature, packageIndex) => (
                <FeatureList
                  key={packageIndex}
                  features={packageFeature.notIncludedFeatures}
                  isIncluded={false}
                />
              ))}
            </View>
          </View>
        )}

        <View className="flex items-center my-5">
          <Button
            onPress={() => console.log("pressed")}
            className="py-3 px-7 bg-primaryGreen"
          >
            <Text className="text-center uppercase text-xl font-bold text-primaryWhite">
              Select
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default SubscriptionCard;
