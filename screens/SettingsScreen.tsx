import React from "react";
import Layout from "../components/Layout";
import { ScrollView, View, Text, Pressable } from "@gluestack-ui/themed";
import Avatar from "../components/Avatar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SettingsStackParamList } from "../navigation/SettingsStackParamList";

type MenuItem = {
  title: string;
  icon:
    | [
        React.ComponentType<{ name: string; size: number; color: string }>,
        string
      ]
    | null;
  onPress: () => void;
  type?: "normal" | "danger";
};

const SettingsScreen = () => {
  const navigation = useNavigation() as NavigationProp<SettingsStackParamList>;

  const menuItems: MenuItem[] = [
    {
      title: "Edit Profile",
      icon: [
        AntDesign as React.ComponentType<{
          name: string;
          size: number;
          color: string;
        }>,
        "edit",
      ],
      onPress: () => {
        alert("Edit Profile Pressed");
      },
    },
    {
      title: "Change Password",
      icon: [
        AntDesign as React.ComponentType<{
          name: string;
          size: number;
          color: string;
        }>,
        "lock",
      ],
      onPress: () => {
        alert("Change Password Pressed");
      },
    },
    {
      title: "Change Plan",
      icon: [
        AntDesign as React.ComponentType<{
          name: string;
          size: number;
          color: string;
        }>,
        "swap",
      ],
      onPress: () => {
        alert("Change Plan Pressed");
      },
    },
    {
      title: "Report Damage",
      icon: [
        AntDesign as React.ComponentType<{
          name: string;
          size: number;
          color: string;
        }>,
        "warning",
      ],
      onPress: () => {
        navigation.navigate("ReportDamage");
      },
    },
    {
      title: "Logout",
      icon: [
        AntDesign as React.ComponentType<{
          name: string;
          size: number;
          color: string;
        }>,
        "logout",
      ],
      onPress: () => {
        alert("Logout Pressed");
      },
    },
    {
      title: "Delete Account",
      icon: [
        AntDesign as React.ComponentType<{
          name: string;
          size: number;
          color: string;
        }>,
        "delete",
      ],
      onPress: () => {
        navigation.navigate("DeleteProfile");
      },
      type: "danger",
    },
  ];

  return (
    <Layout>
      <ScrollView className="h-full">
        <View className="flex flex-col p-4 gap-4 items-center">
          <Avatar image="https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif" />
          <View className="flex flex-col items-center">
            <Text
              className="text-xl text-white"
              style={{
                fontFamily: "Gilroy-Medium",
              }}
            >
              John Doe
            </Text>
            <Text
              className="text-4xl text-primaryGreen"
              style={{
                fontFamily: "Gilroy-ExtraBold",
              }}
            >
              Gold Plan
            </Text>
          </View>

          <View className="flex flex-col gap-2 w-full">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon ? item.icon[0] : null;
              const iconName = item.icon ? item.icon[1] : "";

              return (
                <Pressable
                  key={index}
                  onPress={item.onPress}
                  className="w-full flex flex-row gap-2 items-center py-2 "
                >
                  {IconComponent && (
                    <IconComponent
                      name={iconName}
                      size={24}
                      color={item.type === "danger" ? "#D71515" : "white"}
                    />
                  )}
                  <Text
                    className={`text-2xl ${
                      item.type === "danger"
                        ? `text-tertiaryAlert`
                        : "text-white"
                    }`}
                    style={{
                      fontFamily: "Gilroy-Medium",
                    }}
                  >
                    {item.title}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default SettingsScreen;
