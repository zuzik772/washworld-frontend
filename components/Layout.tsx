import { Box, Pressable, Image } from "@gluestack-ui/themed";
import React from "react";
import { Text, View } from "react-native";
import logo from "../assets/app/washworld-logo.svg";
import Svg from "react-native-svg";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View className="bg-secondaryGray90 flex-1">
      <View className="bg-secondaryGray90 h-1/6 flex flex-col relative items-center w-full border-b-2 border-b-primaryGreen">
        <Svg>{/* Logo here */}</Svg>
      </View>
      <View>{children}</View>
    </View>
  );
};
export default Layout;
