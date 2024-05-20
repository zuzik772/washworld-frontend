import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import NavButton from "../../components/NavButton";

type Props = NativeStackScreenProps<MapStackParamList, "Package">;
const PackageScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-white">PackageScreen</Text>
      <NavButton
        title="Select"
        onPress={() => navigation.navigate("PreWash")}
        disabled={false}
      />
    </Layout>
  );
};

export default PackageScreen;
