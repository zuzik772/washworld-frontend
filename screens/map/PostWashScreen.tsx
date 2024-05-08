import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NavButton from "../../components/NavButton";
import { MapStackParamList } from "../../navigation/MapStackParamList";

type Props = NativeStackScreenProps<MapStackParamList, "PostWash">;
const PostWashScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-white">PostWashScreen</Text>
      <NavButton
        title="Finish"
        onPress={() => navigation.navigate("MapScreen")}
      />
    </Layout>
  );
};

export default PostWashScreen;
