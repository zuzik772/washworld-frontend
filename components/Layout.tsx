import { Box, Pressable } from "@gluestack-ui/themed";
import React from "react";
import { Text, View } from "react-native";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Text>Testing</Text>
      <Box>
        <Pressable
          onPress={() => console.log("Clicked")}
          p="$5"
          bg="$primary500"
          $hover-bg="$primary400"
        >
          <Text className="text-white">Press me</Text>
        </Pressable>
      </Box>
      {children}
    </View>
  );
};

export default Layout;
