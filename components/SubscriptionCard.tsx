import React, { useState } from "react";
import { Membership } from "../types/Membership";
import FeatureList from "./FeatureList";

import {
  Icon,
  CheckCircleIcon,
  Text,
  View,
  Button,
  Divider,
  CloseCircleIcon,
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { selectMembership } from "../store/selectedMembershipSlice";

type SubscriptionCardProps = {
  subscription: Membership;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
}) => {
  const user = useSelector((state: RootState) => state.user);
  const userMembership = user.membership;

  const dispatch = useDispatch();

  const handleSelect = (membership: Membership) => {
    dispatch(selectMembership(membership));
  };

  return (
    <ScrollView className="h-screen mb-32">
      <View
        style={{
          transform: [{ skewX: "-34deg" }],
          opacity: subscription.name === userMembership.name ? 1 : 0,
        }}
        className="bg-primaryGreen absolute right-16"
      >
        <Text className="text-lg px-3 py-1 font-bold text-primaryGreen">
          Your
        </Text>
      </View>
      <View
        style={{ opacity: subscription.name === userMembership.name ? 1 : 0 }}
        className="flex mr-2 "
      >
        <Text className="text-lg bg-primaryGreen px-3 py-1 font-bold text-primaryWhite self-end">
          Your Plan
        </Text>
      </View>
      {subscription.price > 169 ? (
        // Alternative styles
        <>
          <View className="border-2 border-secondaryOrange p-5 mr-2 ml-2 ">
            <View className="flex justify-center items-center mt-3 mb-3">
              <Icon
                color="$secondaryGray90"
                as={CloseCircleIcon}
                fill="$secondaryOrange"
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
                    features={packageFeature.included_features}
                    isIncluded={true}
                    isAlternative={true}
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
                      features={packageFeature.not_included_features}
                      isIncluded={false}
                      isAlternative={true}
                    />
                  ))}
                </View>
              </View>
            )}

            <View className="flex items-center my-5">
              <Button
                onPress={() => console.log("pressed")}
                className="py-3 px-7 bg-secondaryOrange"
              >
                <Text className="text-center uppercase text-xl font-bold text-primaryWhite">
                  Upgrade
                </Text>
              </Button>
              <Text className="text-sm mt-2 text-center text-primaryWhite">
                Upgrade for {subscription.price - userMembership.price}kr
              </Text>
            </View>
          </View>
        </>
      ) : (
        // Original styles
        <>
          <View className="border-2 border-primaryGreen p-5 mr-2 ml-2 ">
            <View className="flex justify-center items-center mt-3 mb-3">
              <Icon
                color="$secondaryGray90"
                fill="$primaryGreen"
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
                    features={packageFeature.included_features}
                    isIncluded={true}
                    isAlternative={false}
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
                      features={packageFeature.not_included_features}
                      isIncluded={false}
                      isAlternative={false}
                    />
                  ))}
                </View>
              </View>
            )}

            <View className="flex items-center my-5">
              <Button
                onPress={() => handleSelect(subscription)}
                className="py-3 px-7 bg-primaryGreen"
              >
                <Text className="text-center uppercase text-xl font-bold text-primaryWhite">
                  Select
                </Text>
              </Button>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default SubscriptionCard;
