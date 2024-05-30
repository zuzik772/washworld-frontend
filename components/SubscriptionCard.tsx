import React from "react";
import { Feature, Membership } from "../types/Membership";
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
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";
import IncludedFeatureList from "./IncludedFeatureList";
import NotIncludedFeatureList from "./NotIncludedFeatureList";

type SubscriptionCardProps = {
  subscription: Membership;
  navigation: NativeStackNavigationProp<MapStackParamList, "PreWash">;
  allFeatures: Feature[];
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
  navigation,
  allFeatures,
}) => {
  const user = useSelector((state: RootState) => state.user);
  const userMembership = user.user?.membership[0];
  const isCurrentUserPlan =
    subscription.membership_name === userMembership?.membership_name;
  const userMembershipPrice = userMembership
    ? userMembership.membership_price
    : 0;

  const isAlternative = userMembershipPrice < subscription.membership_price;

  return (
    <View className="">
      <ScrollView className="pt-10">
        <View className="pb-48">
          {isCurrentUserPlan && (
            <View style={{ marginTop: -31 }}>
              <View
                style={{
                  transform: [{ skewX: "-34deg" }],
                }}
                className="bg-primaryGreen absolute right-16"
              >
                <Text className="text-lg px-3 py-1 font-bold text-primaryGreen">
                  Your
                </Text>
              </View>
              <View className="flex mr-2 ">
                <Text className="text-lg bg-primaryGreen px-3 py-1 font-bold text-primaryWhite self-end">
                  Your Plan
                </Text>
              </View>
            </View>
          )}
          {subscription.membership_price > userMembershipPrice ? (
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
                    {subscription.membership_name}
                  </Text>
                </View>

                <View className="flex flex-col mt-6">
                  <Text className="text-primaryWhite text-center font-bold text-lg">
                    Included
                  </Text>
                  <Divider className="w-80 h-px bg-primaryWhite self-center mb-3 mt-1" />
                  <View className="self-start pl-6 mb-8">
                    <IncludedFeatureList
                      allFeatures={allFeatures}
                      features={subscription.package.features}
                      isAlternative={isAlternative}
                    />
                  </View>
                </View>

                {subscription.membership_name !== "All Inclusive" && (
                  <View className="flex flex-col">
                    <Text className="text-primaryWhite text-center font-bold text-lg">
                      Not Included
                    </Text>
                    <Divider className="w-80 h-px bg-primaryWhite self-center mb-3 mt-1" />
                    <View className="self-start pl-6">
                      <NotIncludedFeatureList
                        features={subscription.package.features}
                        allFeatures={allFeatures}
                      />
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
                    Upgrade for{" "}
                    {subscription.membership_price > userMembershipPrice
                      ? `${
                          subscription.membership_price - userMembershipPrice
                        } kr`
                      : "0 kr"}
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
                    {subscription.membership_name}
                  </Text>
                </View>

                <View className="flex flex-col mt-6">
                  <Text className="text-primaryWhite text-center font-bold text-lg">
                    Included
                  </Text>
                  <Divider className="w-80 h-px bg-primaryWhite self-center mb-3 mt-1" />
                  <View className="self-start pl-6 mb-8">
                    <IncludedFeatureList
                      allFeatures={allFeatures}
                      features={subscription.package.features}
                      isAlternative={isAlternative}
                    />
                  </View>
                </View>

                {subscription.membership_name !== "All Inclusive" && (
                  <View className="flex flex-col">
                    <Text className="text-primaryWhite text-center font-bold text-lg">
                      Not Included
                    </Text>
                    <Divider className="w-80 h-px bg-primaryWhite self-center mb-3 mt-1" />
                    <View className="self-start pl-6">
                      <NotIncludedFeatureList
                        features={subscription.package.features}
                        allFeatures={allFeatures}
                      />
                    </View>
                  </View>
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SubscriptionCard;
