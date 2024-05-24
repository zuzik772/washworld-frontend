import { StyleSheet } from "react-native";
import React from "react";
import { LocationState } from "../store/locationSlice";

import { View, Text } from "@gluestack-ui/themed";

// interface BadgesListProps {
//   location: Location;
// }

const BadgesList = () => {
  return (
    <View className="mt-7 mb-14 gap-3 flex flex-row flex-wrap ml-5 ">
      <Text className="bg-secondaryGray90 border-2 border-primaryGreen rounded-sm px-3 py-1 text-primaryGreen">
        X washing halls
      </Text>
      <Text className="bg-secondaryGray90 border-2 border-primaryGreen rounded-sm px-3 py-1 text-primaryGreen">
        X self wash stations
      </Text>
      <Text className="bg-secondaryGray90 border-2 border-primaryGreen rounded-sm px-3 py-1 text-primaryGreen">
        Environmentally friendly
      </Text>
      <Text className="bg-secondaryGray90 border-2 border-primaryGreen rounded-sm px-3 py-1 text-primaryGreen">
        Easy Payment
      </Text>
      <Text className="bg-secondaryGray90 border-2 border-primaryGreen rounded-sm px-3 py-1 text-primaryGreen">
        Short Queue time
      </Text>
    </View>
  );
};

export default BadgesList;

const styles = StyleSheet.create({});
