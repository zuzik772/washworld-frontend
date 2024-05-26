import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";
import NavButton from "../components/NavButton";
import Layout from "../components/Layout";
import {
  View,
  Text,
  Pressable,
  EyeIcon,
  FormControl,
  ScrollView,
} from "@gluestack-ui/themed";

import { Keyboard, TouchableWithoutFeedback } from "react-native";
import CustomInput from "../components/inputs/CustomInput";
import CustomInputWithIcon from "../components/inputs/CustomInputWithIcon";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signIn } from "../store/userSlice";
import { AppDispatch } from "../store/store";

type Props = NativeStackScreenProps<MapStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView className="h-screen">
          <View className="flex items-center gap-8 mt-20">
            <Text className="text-primaryWhite text-3xl font-extrabold">
              Login
            </Text>
            <FormControl className="w-[26rem] flex gap-8">
              <CustomInput
                placeholderTitle="Enter your email"
                aria-label="Enter your email"
                onChangeText={(e) => {
                  setEmail(e.nativeEvent.text);
                }}
              />

              <View className="flex gap-1 mb-6">
                <CustomInputWithIcon
                  placeholderTitle="Enter your password"
                  aria-label="Enter your password"
                  icon={EyeIcon}
                  onChangeText={(e) => {
                    setPassword(e.nativeEvent.text);
                  }}
                />

                <Pressable onPress={() => console.log("Forgot password")}>
                  <Text
                    className="text-primaryGreen text-lg underline"
                    style={{ textAlign: "right" }}
                  >
                    Forgot password?
                  </Text>
                </Pressable>
              </View>
            </FormControl>
            <NavButton
              title="Login"
              onPress={() => dispatch(signIn({ email, password }))}
              disabled={false}
            />

            <View className="flex items-center">
              <Text className="text-primaryWhite">New customer?</Text>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text className="text-primaryGreen text-lg font-semibold underline">
                  Sign up
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default LoginScreen;
