import React, { useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";
import WashworldLogo from "../assets/app/washworld-logo.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoBackButton from "./GoBackButton";
import { ScrollView, View } from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";

type LayoutProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  // TODO: This doesn't check tab navigation, only stack navigation
  const location = useRoute();
  const [backButtonVisible, setBackButtonVisible] = React.useState(false);

  useEffect(() => {
    const hiddenRoutes = ["MapScreen", "Wash", "PostWash"];
    console.log("route:", location.name);
    if (location.name) {
      setBackButtonVisible(!hiddenRoutes.includes(location.name));
    }
  }, [location]);

  return (
    <View className="bg-secondaryGray90 flex-1">
      <View
        className="bg-secondaryGray90 flex-1"
        style={[{ paddingTop: Math.max(insets.top, 16) }]}
      >
        <View className="h-20 flex items-center justify-center w-full border-b-[3px] border-b-primaryGreen">
          <View
            className={`absolute left-4 top-4 ${
              backButtonVisible ? "block" : "hidden"
            }`}
          >
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
