import { useFonts } from "expo-font";
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppWrapper from "./components/AppWrapper";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./washworld-gluestack-ui.config";

export default function App() {
  useFonts({
    "Gilroy-Medium": require("./fonts/Gilroy-Medium.otf"),
    "Gilroy-ExtraBold": require("./fonts/Gilroy-ExtraBold.otf"),
  });

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <AppWrapper />
          </NavigationContainer>
        </GluestackUIProvider>
      </QueryClientProvider>
    </Provider>
  );
}
