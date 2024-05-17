import { Text } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import StyledButton from "../../components/StyledButton";
import { View } from "@gluestack-ui/themed";

type Props = NativeStackScreenProps<MapStackParamList, "PostWash">;
const PostWashScreen = ({ navigation }: Props) => {
  const [litersSaved, setLitersSaved] = useState(250);
  return (
    <Layout>
      <View className="my-8 flex flex-col gap-16 px-8">
        <Text
          className="text-white text-center text-5xl"
          style={{
            fontFamily: "Gilroy-ExtraBold",
          }}
        >
          Wash Complete
        </Text>

        <View className="flex flex-col gap-4">
          <Text
            className="text-white text-center text-3xl"
            style={{
              fontFamily: "Gilroy-Normal",
            }}
          >
            Thank you for washing with{" "}
            <Text
              style={{
                fontFamily: "Gilroy-ExtraBold",
              }}
            >
              Wash World
            </Text>
            , you have helped recycle
          </Text>
          <Text
            className="text-primaryGreen text-center text-7xl"
            style={{
              fontFamily: "Gilroy-ExtraBold",
            }}
          >
            {litersSaved} Liter{litersSaved > 1 ? "s" : ""}
          </Text>
          <Text
            className="text-white text-center text-3xl"
            style={{
              fontFamily: "Gilroy-Normal",
            }}
          >
            of water due to our water recycling system.
          </Text>
        </View>
        <View className="flex flex-col gap-2">
          <Text
            className="text-white text-center text-2xl"
            style={{
              fontFamily: "Gilroy-Normal",
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
        </View>

        <View className="flex flex-col gap-2 items-center">
          <StyledButton
            title="Finish"
            onPress={() => navigation.navigate("MapScreen")}
          />
          <Text className="text-primaryGreen underline">
            Experienced a problem?
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default PostWashScreen;
