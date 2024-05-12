import React from "react";
import { Package } from "../types/Subscription";

import {
  Icon,
  CheckCircleIcon,
  Text,
  View,
  SlashIcon,
  Button,
} from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";

type LocationScreenProps = NativeStackScreenProps<MapStackParamList>;

type PackageCardProps = {
  subscription: Package;
  navigation: LocationScreenProps["navigation"];
};

const PackageCard: React.FC<PackageCardProps> = ({
  subscription,
  navigation,
}) => {
  //using subscription instead of "package", because "package" is a reserved keyword
  return (
    <View className="border-2 border-primaryGreen p-5 mr-2 ml-2">
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
      <Button
        onPress={() =>
          navigation.navigate("PreWash", { packageName: subscription.name })
        }
        padding={5}
        marginTop={5}
        marginBottom={5}
        backgroundColor="$primaryGreen"
      >
        <Text
          textAlign="center"
          textTransform="uppercase"
          fontSize={15}
          fontWeight="bold"
          color="$primaryWhite"
        >
          Select
        </Text>
      </Button>
    </View>
  );
};

export default PackageCard;
