import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import NavButton from "../../components/NavButton";

type Props = NativeStackScreenProps<MapStackParamList, "Location">;
const LocationScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-white">LocationScreen</Text>
      <NavButton
        title="Select Wash"
        onPress={() => navigation.navigate("Package")}
      />
    </Layout>
  );
};

export default LocationScreen;
