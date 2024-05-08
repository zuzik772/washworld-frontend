import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import WashworldLogo from "../assets/app/washworld-logo.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoBackButton from "./GoBackButton";

type LayoutProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View className="bg-secondaryGray90 flex-1">
      <View
        className="bg-secondaryGray90 flex-1"
        style={[{ paddingTop: Math.max(insets.top, 16) }]}
      >
        <View className="h-20 flex items-center justify-center w-full border-b-[3px] border-b-primaryGreen">
          <View className="absolute left-4 top-4">
            <GoBackButton />
          </View>
          <View className="flex-row items-center justify-between">
            <WashworldLogo height={40} />
          </View>
        </View>
        <View>{children}</View>
      </View>
    </View>
  );
};
export default Layout;
