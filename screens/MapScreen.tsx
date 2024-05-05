import { Text } from "react-native";
import { Pressable } from "@gluestack-ui/themed";

import React from "react";
import Layout from "../components/Layout";
const MapScreen = () => {
  return (
    <Layout>
      <Text className="text-white">MapScreen</Text>
      <Pressable
        onPress={() => console.log("Clicked")}
        padding={20}
        className="bg-primaryGreen"
      >
        <Text className="text-white text-center">Test Button</Text>
      </Pressable>
    </Layout>
  );
};
export default MapScreen;
