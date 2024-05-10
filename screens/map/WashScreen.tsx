import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NavButton from "../../components/NavButton";
import { MapStackParamList } from "../../navigation/MapStackParamList";

type Props = NativeStackScreenProps<MapStackParamList, "Wash">;
const WashScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-white">WashScreen</Text>
      <NavButton
        title="TEST Go to post wash"
        onPress={() => navigation.navigate("PostWash")}
        disabled={false}
      />
    </Layout>
  );
};

export default WashScreen;
