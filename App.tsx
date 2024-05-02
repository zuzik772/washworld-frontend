import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapStackParamList } from "./navigation/MapStackParamList";
import MapScreen from "./screens/MapScreen";
import LocationScreen from "./screens/FavouritesScreen";
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

export default function App() {
  const Tab = createBottomTabNavigator();
  const MapStack = createNativeStackNavigator<MapStackParamList>();
  const FavouritesStack =
    createNativeStackNavigator<FavouritesStackParamList>();
  const InfoStack = createNativeStackNavigator<InfoStackParamList>();
  const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

  const MapNavigator = () => {
    return (
      <MapStack.Navigator
        initialRouteName="MapScreen"
        screenOptions={{ headerShown: false }}
      >
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
    //add global provider here store={store}
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Map" component={MapNavigator} />
        <Tab.Screen name="Favourites" component={FavouritesNavigator} />
        <Tab.Screen name="Info" component={InfoNavigator} />
        <Tab.Screen name="Settings" component={SettingsNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
