import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapStackParamList } from "./navigation/MapStackParamList";
import MapScreen from "./screens/MapScreen";
import InfoScreen from "./screens/InfoScreen";
import SettingsScreen from "./screens/SettingsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { FavouritesStackParamList } from "./navigation/FavouritesStackParamList";
import { InfoStackParamList } from "./navigation/InfoStackParamList";
import { SettingsStackParamList } from "./navigation/SettingsStackParamList";
import PackageScreen from "./screens/map/PackageScreen";
import PreWashScreen from "./screens/map/PreWashScreen";
import WashScreen from "./screens/map/WashScreen";
import PostWashScreen from "./screens/map/PostWashScreen";
import AddCarScreen from "./screens/settings/AddCarScreen";
import ReportDamageScreen from "./screens/settings/ReportDamageScreen";
import DeleteProfileScreen from "./screens/settings/DeleteProfileScreen";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./washworld-gluestack-ui.config";
import { useFonts } from "expo-font";
import "./global.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import LocationScreen from "./screens/map/LocationScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const queryClient = new QueryClient();

export default function App() {
  useFonts({
    "Gilroy-Medium": require("./fonts/Gilroy-Medium.otf"),
    "Gilroy-ExtraBold": require("./fonts/Gilroy-ExtraBold.otf"),
  });

  const Tab = createBottomTabNavigator();
  const MapStack = createNativeStackNavigator<MapStackParamList>();
  const FavouritesStack =
    createNativeStackNavigator<FavouritesStackParamList>();
  const InfoStack = createNativeStackNavigator<InfoStackParamList>();
  const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

  const MapNavigator = () => {
    return (
      <MapStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {/* to be moved and render based on auth state */}
        {/* now for simplicity of styling its under map */}
        <MapStack.Screen name="Login" component={LoginScreen} />
        <MapStack.Screen name="SignUp" component={SignUpScreen} />

        <MapStack.Screen name="MapScreen" component={MapScreen} />
        <MapStack.Screen name="Location" component={LocationScreen} />
        <MapStack.Screen name="Package" component={PackageScreen} />
        <MapStack.Screen name="PreWash" component={PreWashScreen} />
        <MapStack.Screen name="Wash" component={WashScreen} />
        <MapStack.Screen name="PostWash" component={PostWashScreen} />
      </MapStack.Navigator>
    );
  };

  const FavouritesNavigator = () => {
    return (
      <FavouritesStack.Navigator screenOptions={{ headerShown: false }}>
        <FavouritesStack.Screen
          name="FavouritesScreen"
          component={FavouritesScreen}
        />
      </FavouritesStack.Navigator>
    );
  };

  const InfoNavigator = () => {
    return (
      <InfoStack.Navigator screenOptions={{ headerShown: false }}>
        <InfoStack.Screen name="InfoScreen" component={InfoScreen} />
      </InfoStack.Navigator>
    );
  };

  const SettingsNavigator = () => {
    return (
      <SettingsStack.Navigator
        initialRouteName="SettingsScreen"
        screenOptions={{ headerShown: false }}
      >
        <SettingsStack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
        />
        <SettingsStack.Screen name="AddCar" component={AddCarScreen} />
        <SettingsStack.Screen
          name="ReportDamage"
          component={ReportDamageScreen}
        />
        <SettingsStack.Screen
          name="DeleteProfile"
          component={DeleteProfileScreen}
        />
      </SettingsStack.Navigator>
    );
  };

  const getRouteName = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) as string;
    console.log(routeName);

    const hiddenRoutes = ["PreWash", "Wash", "PostWash"];
    return hiddenRoutes.includes(routeName) ? "-100%" : "0%";
  };

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                  backgroundColor: "#1a1a1a",
                  borderBlockColor: "#34b566",
                  borderTopWidth: 3,
                  height: 90,
                },
                tabBarActiveTintColor: "#34b566",
                tabBarInactiveTintColor: "#ffffff",

                tabBarLabelStyle: {
                  fontWeight: "bold",
                },

                tabBarIcon: ({ focused, color, size }) => {
                  return route.name === "Map" ? (
                    <MaterialIcons
                      name="location-pin"
                      size={size}
                      color={color}
                    />
                  ) : route.name === "Favourites" ? (
                    <AntDesign name="heart" size={size} color={color} />
                  ) : route.name === "Info" ? (
                    <MaterialIcons name="info" size={size} color={color} />
                  ) : route.name === "Settings" ? (
                    <MaterialIcons name="settings" size={size} color={color} />
                  ) : null;
                },
              })}
            >
              <Tab.Screen
                name="Map"
                component={MapNavigator}
                options={({ route }) => ({
                  tabBarStyle: {
                    position: "absolute",
                    bottom: getRouteName(route),
                    backgroundColor: "#1a1a1a",
                    borderBlockColor: "#34b566",
                    borderTopWidth: 3,
                    height: 90,
                  },
                })}
              />
              <Tab.Screen name="Favourites" component={FavouritesNavigator} />
              <Tab.Screen name="Info" component={InfoNavigator} />
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
      </QueryClientProvider>
    </Provider>
  );
}
