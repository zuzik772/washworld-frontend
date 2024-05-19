import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";
import NavButton from "../components/NavButton";
import Layout from "../components/Layout";

type Props = NativeStackScreenProps<MapStackParamList, "SignUp">;
const SignUpScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <View>
        <Text>SignUpScreen</Text>
        <NavButton
          title="Sign up"
          onPress={() => navigation.navigate("MapScreen")}
          disabled={false}
        />
      </View>
    </Layout>
  );
};

export default SignUpScreen;
