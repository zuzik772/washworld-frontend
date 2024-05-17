import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import StyledButton from "../../components/StyledButton";
import GoBackButton from "../../components/GoBackButton";

type Props = NativeStackScreenProps<MapStackParamList, "Location">;
const LocationScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-white">LocationScreen</Text>
      <StyledButton
        title="Select Wash"
        onPress={() => navigation.navigate("Package")}
        disabled={false}
      />
    </Layout>
  );
};

export default LocationScreen;
