import React, { useEffect } from "react";
import { DimensionValue, Dimensions, StyleProp, ViewStyle } from "react-native";
import WashworldLogo from "../assets/app/washworld-logo.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoBackButton from "./GoBackButton";
import { View } from "@gluestack-ui/themed";
import { useDispatch } from "react-redux";
import { appNavigation } from "../store/appNavigationSlice";
import { useRoute } from "@react-navigation/native";

type LayoutProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-secondaryGray90"
      style={[
        {
          paddingTop: Math.max(insets.top, 16),
          height: Dimensions.get("window").height - insets.top,
        },
      ]}
    >
      <View className="h-20 flex items-center justify-center w-full border-b-[3px] border-b-primaryGreen">
        <View className={`absolute left-4 top-4`}>
          <GoBackButton />
        </View>
        <View className="flex-row items-center justify-between">
          <WashworldLogo height={40} />
        </View>
      </View>
      <View className="h-full">{children}</View>
    </View>
  );
};
export default Layout;
