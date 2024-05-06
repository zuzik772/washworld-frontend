import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NavButton from "../../components/NavButton";

type Props = NativeStackScreenProps<MapStackParamList, "PreWash">;
const PreWashScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-primaryWhite">Prewashscreen</Text>
      <NavButton title="Start" onPress={() => navigation.navigate("Wash")} />
    </Layout>
  );
};

export default PreWashScreen;
