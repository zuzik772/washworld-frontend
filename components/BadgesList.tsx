import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { LocationState } from "../store/locationSlice";

interface BadgesListProps {
  location: LocationState;
}

const BadgesList: React.FC<BadgesListProps> = ({ location }) => {
  return (
    <View className="my-7 gap-3 flex flex-row flex-wrap justify-center items-center">
      {location.badges.map((badge, index) => (
        <Box
          key={index}
          className="bg-transparent p-2 border-2 rounded border-primaryGreen m-1"
        >
          <Text color="$primaryGreen">{badge}</Text>
        </Box>
      ))}
    </View>
  );
};

export default BadgesList;

const styles = StyleSheet.create({});
