import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import StyledButton from "../../components/StyledButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";

type Props = NativeStackScreenProps<MapStackParamList, "Package">;
const PackageScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-white">PackageScreen</Text>
      <StyledButton
        title="Select"
        onPress={() => navigation.navigate("PreWash")}
        disabled={false}
      />
    </Layout>
  );
};

export default PackageScreen;
