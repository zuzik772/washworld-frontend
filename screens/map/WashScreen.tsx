import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NavButton from "../../components/NavButton";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { View } from "@gluestack-ui/themed";
import ProgressCircle from "../../components/washScreen/ProgressCircle";

type Props = NativeStackScreenProps<MapStackParamList, "Wash">;
const WashScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <View className="my-8 flex flex-col gap-1">
        <Text
          className="text-white text-center text-xl"
          style={{
            fontFamily: "Gilroy-Medium",
          }}
        >
          Wash Type
        </Text>
        <Text
          className="text-primaryGreen text-center text-6xl"
          style={{
            fontFamily: "Gilroy-ExtraBold",
          }}
        >
          Gold
        </Text>
        <Text
          className="text-white text-center text-2xl"
          style={{
            fontFamily: "Gilroy-Medium",
          }}
        >
          Status
        </Text>
        <Text
          className="text-white text-center text-3xl"
          style={{
            fontFamily: "Gilroy-ExtraBold",
          }}
        >
          Cleaning Rims
        </Text>
      </View>

      <ProgressCircle totalTime={60} />

      {/* <NavButton
        title="TEST Go to post wash"
        onPress={() => navigation.navigate("PostWash")}
      /> */}
    </Layout>
  );
};

export default WashScreen;
