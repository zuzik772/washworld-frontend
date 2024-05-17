import { Text } from "react-native";
import { Button, ButtonText, Pressable } from "@gluestack-ui/themed";

import React from "react";
import Layout from "../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";
import NavButton from "../components/StyledButton";

type Props = NativeStackScreenProps<MapStackParamList, "MapScreen">;
const MapScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-white">MapScreen</Text>
      <NavButton
        title="Select"
        onPress={() => navigation.navigate("Location")}
        disabled={false}
      />
    </Layout>
  );
};
export default MapScreen;
