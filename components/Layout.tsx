import { Box, Pressable } from "@gluestack-ui/themed";
import React from "react";
import { Text, View } from "react-native";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View className="flex-1 items-center justify-center bg-secondaryGray90">
      {children}
    </View>
  );
};
export default Layout;
