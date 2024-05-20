import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import NavButton from "../../components/NavButton";

type Props = NativeStackScreenProps<MapStackParamList, "Location">;
const LocationScreen = ({ navigation, route }: Props) => {
  const { locationTitle } = route.params;
  return (
    <Layout>
      <Text className="text-white">{locationTitle}</Text>
      <NavButton
        title="Select Wash"
        onPress={() => navigation.navigate("Package")}
        disabled={false}
      />
    </Layout>
  );
};

export default LocationScreen;
