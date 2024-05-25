import React, { useState } from "react";
import Layout from "../../components/Layout";
import { ScrollView, View, Text } from "@gluestack-ui/themed";
import NavButton from "../../components/NavButton";
import CustomModal from "../../components/CustomModal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

type Props = NativeStackScreenProps<MapStackParamList>;
const DeleteProfileScreen = ({ navigation }: Props) => {
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  return (
    <Layout>
      <ScrollView className="h-full">
        <View className="flex flex-col gap-8 h-full p-4 mb-32">
          <View className="flex flex-col justify-center items-center gap-4">
            <Text
              className="text-tertiaryAlert text-4xl"
              style={{
                fontFamily: "Gilroy-ExtraBold",
              }}
            >
              DELETE ACCOUNT
            </Text>
            <Text
              className="text-white text-xl p-4"
              style={{
                fontFamily: "Gilroy-Medium",
              }}
            >
              Are you sure you want to delete your account? Deleting your
              account is an irreversible action and will lose you access to the
              following features:
            </Text>
            <View className="flex gap-2 my-8">
              {[
                {
                  title: "Subscription",
                  content:
                    "You will lose access to your subscription and any benefits that come with it, and you will not recieve any compensation for the remaining time on your subscriptions.",
                  icon: <AntDesign name="user" size={24} color="white" />,
                },
                {
                  title: "Wash History",
                  content:
                    "You will lose access to your wash history and any data associated with it.",
                  icon: (
                    <MaterialIcons
                      name="local-car-wash"
                      size={24}
                      color="white"
                    />
                  ),
                },
                {
                  title: "Promotions and Perks",
                  content:
                    "You will lose access to any promotions and perks that come with your account, washing history and subscription status.",
                  icon: <Ionicons name="ticket" size={24} color="white" />,
                },
                {
                  title: "Car Information",
                  content:
                    'Removing your account will remove any car information associated with your account. If you only wish to remove a car from your profile, please do that under the "Manage Cars" setting in options instead.',
                  icon: (
                    <FontAwesome6 name="car-side" size={24} color="white" />
                  ),
                },
              ].map((item, index) => (
                <View
                  className="border-t-2 border-primaryGreen p-4 flex gap-2"
                  key={index}
                >
                  <View className="flex flex-row justify-between">
                    <Text
                      className="text-white text-3xl"
                      style={{
                        fontFamily: "Gilroy-ExtraBold",
                      }}
                    >
                      {item.title}
                    </Text>
                    {item.icon}
                  </View>
                  <Text
                    className="text-white text-lg"
                    style={{
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    {item.content}
                  </Text>
                </View>
              ))}
            </View>
            <Text
              className="text-white text-lg"
              style={{
                fontFamily: "Gilroy-Medium",
              }}
            >
              If you are sure you want to delete your account, press the button
              below.
            </Text>
            <NavButton
              danger
              title="Delete Account"
              onPress={() => setShowDeletionModal(true)}
            />
          </View>
        </View>
      </ScrollView>

      <CustomModal
        isVisible={showDeletionModal}
        changeVisibility={setShowDeletionModal}
        title="ACCOUNT DELETION"
        description="Are you completely sure about deleting your account? This action is irreversible and will remove all data associated with your account, and you will lose access to all features and benefits."
        buttons={[
          {
            title: "Cancel",
            type: "normal",
            onPress: () => {},
          },
          {
            title: "Delete Account",
            type: "danger",
            onPress: () => {
              // TODO: Logic here
              alert("Account Deleted");

              navigation.navigate("Login");
            },
          },
        ]}
      />
    </Layout>
  );
};

export default DeleteProfileScreen;
