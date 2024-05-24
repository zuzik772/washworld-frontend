import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavouritesStackParamList } from "../navigation/FavouritesStackParamList";
import { InfoStackParamList } from "../navigation/InfoStackParamList";
import { MapStackParamList } from "../navigation/MapStackParamList";
import { SettingsStackParamList } from "../navigation/SettingsStackParamList";
import FavouritesScreen from "../screens/FavouritesScreen";
import InfoScreen from "../screens/InfoScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AddCarScreen from "../screens/settings/AddCarScreen";
import DeleteProfileScreen from "../screens/settings/DeleteProfileScreen";
import ReportDamageScreen from "../screens/settings/ReportDamageScreen";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LocationScreen from "../screens/map/LocationScreen";
import PackageScreen from "../screens/map/PackageScreen";
import PostWashScreen from "../screens/map/PostWashScreen";
import PreWashScreen from "../screens/map/PreWashScreen";
import WashScreen from "../screens/map/WashScreen";
import { RootState } from "../store/store";
import { appNavigation } from "../store/appNavigationSlice";
import {
  NavigationState,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const AppWrapper: FC = ({}) => {
  const Tab = createBottomTabNavigator();
  const MapStack = createNativeStackNavigator<MapStackParamList>();
  const FavouritesStack =
    createNativeStackNavigator<FavouritesStackParamList>();
  const InfoStack = createNativeStackNavigator<InfoStackParamList>();
  const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

  // const dispatch = useDispatch();

  // const appRoute = useSelector(
  //   (state: RootState) => state.appNavigation.appNavigation
  // );

  const [tabBarVisible, setTabBarVisible] = useState(false);

  const navigation = useNavigation();
  navigation.addListener("state", (state) => {
    if (state?.data?.state) {
      const currentRoute = state.data.state.routes[state.data.state.index];
      let screenName = null;

      if (currentRoute?.state) {
        const nestedRouteIndex = currentRoute.state.index;
        if (nestedRouteIndex !== undefined) {
          const nestedRoute = currentRoute.state.routes[nestedRouteIndex];
          screenName = nestedRoute?.name ?? null;
        }
      }

      if (screenName)
        setTabBarVisible(
          !["PreWash", "Wash", "PostWash", "ReportDamage"].includes(screenName)
        );
    }
  });

  const MapNavigator = () => {
    return (
      <MapStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
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

  return (
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
          switch (route.name) {
            case "Map":
              return (
                <MaterialIcons name="location-pin" size={size} color={color} />
              );
            case "Favourites":
              return <AntDesign name="heart" size={size} color={color} />;
            case "Info":
              return <MaterialIcons name="info" size={size} color={color} />;
            case "Settings":
              return (
                <MaterialIcons name="settings" size={size} color={color} />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="Map"
        component={MapNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            bottom: tabBarVisible ? "0%" : "-100%",
            backgroundColor: "#1a1a1a",
            borderBlockColor: "#34b566",
            borderTopWidth: 3,
            height: 90,
          },
        })}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            bottom: tabBarVisible ? "0%" : "100%",
            backgroundColor: "#1a1a1a",
            borderBlockColor: "#34b566",
            borderTopWidth: 3,
            height: 90,
          },
        })}
      />
      <Tab.Screen
        name="Info"
        component={InfoNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            bottom: tabBarVisible ? "0%" : "100%",
            backgroundColor: "#1a1a1a",
            borderBlockColor: "#34b566",
            borderTopWidth: 3,
            height: 90,
          },
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            bottom: tabBarVisible ? "0%" : "100%",
            backgroundColor: "#1a1a1a",
            borderBlockColor: "#34b566",
            borderTopWidth: 3,
            height: 90,
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default AppWrapper;
