import { StyleSheet } from "react-native";
import React from "react";
import { LocationState } from "../store/locationSlice";
import { Location } from "../types/Location";
import { View, Text } from "@gluestack-ui/themed";

interface BadgesListProps {
  location: Location;
}

const BadgesList: React.FC<BadgesListProps> = ({ location }) => {
  return (
    <View className="my-7 gap-3 flex flex-row flex-wrap justify-center items-center ">
      <Text className="bg-secondaryGray90 border-2 border-primaryGreen rounded-sm px-3 py-1 text-primaryGreen">
        {location.washing_halls.length} washing halls
      </Text>
      <Text className="bg-secondaryGray90 border-2 border-primaryGreen rounded-sm px-3 py-1 text-primaryGreen">
        {location.self_wash_stations.length} self wash stations
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
