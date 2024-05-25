import { Pressable, Text } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { ScrollView, View } from "@gluestack-ui/themed";
import NavButton from "../../components/NavButton";
import { SettingsStackParamList } from "../../navigation/SettingsStackParamList";

type Props =
  | NativeStackScreenProps<MapStackParamList>
  | NativeStackScreenProps<SettingsStackParamList>;
const PostWashScreen = ({ navigation }: Props) => {
  const [litersSaved, setLitersSaved] = useState(250);
  return (
    <Layout>
      <ScrollView className="h-full">
        <View className="py-8 flex flex-col gap-16 px-8 h-full">
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
                fontFamily: "Gilroy-Medium",
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
                fontFamily: "Gilroy-Medium",
              }}
            >
              of water due to our water recycling system.
            </Text>
          </View>
          <View className="flex flex-col gap-2">
            <Text
              className="text-white text-center text-2xl"
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
          </View>

          <View className="flex flex-col gap-2 items-center">
            <NavButton
              title="Finish"
              onPress={() =>
                (
                  navigation as unknown as NativeStackScreenProps<MapStackParamList> & {
                    navigate: (screen: string) => void;
                  }
                ).navigate("MapScreen")
              }
            />
            <Pressable
              onPress={() =>
                (
                  navigation as unknown as NativeStackScreenProps<SettingsStackParamList> & {
                    navigate: (screen: string) => void;
                  }
                ).navigate("ReportDamage")
              }
            >
              <Text className="text-primaryGreen underline">
                Experienced a problem?
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default PostWashScreen;
