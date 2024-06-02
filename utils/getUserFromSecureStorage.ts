import * as SecureStore from "expo-secure-store";

const getUserFromSecureStorage = async () => {
  const user = await SecureStore.getItemAsync("user");
  return user ? JSON.parse(user) : null;
};

export default getUserFromSecureStorage;
