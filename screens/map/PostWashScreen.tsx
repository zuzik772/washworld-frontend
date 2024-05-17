import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import StyledButton from "../../components/StyledButton";

type Props = NativeStackScreenProps<MapStackParamList, "PostWash">;
const PostWashScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <Text className="text-white">PostWashScreen</Text>
      <StyledButton
        title="Finish"
        onPress={() => navigation.navigate("MapScreen")}
        disabled={false}
      />
    </Layout>
  );
};

export default PostWashScreen;
