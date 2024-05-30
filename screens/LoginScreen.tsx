import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
import { signIn } from "../store/userSlice";
import { AppDispatch } from "../store/store";
import { Controller, useForm } from "react-hook-form";
import { SignInDto } from "../dto/signinDto";
import { loadToken } from "../store/userSlice";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { RootStackParamList } from "../navigation/RootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const {
    reset,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<SignInDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (signinDto: SignInDto) => {
    const resultAction = await dispatch(signIn(signinDto));
    console.log("signinDto", signinDto);
    if (signIn.fulfilled.match(resultAction)) {
      const userToken = await SecureStore.setItemAsync(
        "userToken",
        resultAction.payload.token
      );
      console.log("userToken", userToken);
      navigation.navigate("MapScreen");
      reset({ email: "", password: "" });
    } else if (signIn.rejected.match(resultAction)) {
      setError("root", {
        message: "Invalid credentials",
      });
    }
  };

  useEffect(() => {
    dispatch(loadToken());
  }, []);

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView className="h-screen">
          <View className="flex items-center gap-8 mt-20">
            <Text className="text-primaryWhite text-3xl font-extrabold">
              Login
            </Text>
            <FormControl className="w-[26rem] flex gap-8">
              {(errors.root || errors.email || errors.password) && (
                <Text className="text-red-500 text-lg">
                  {errors.root?.message ||
                    errors.email?.message ||
                    errors.password?.message}
                </Text>
              )}
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    placeholderTitle="Enter your email"
                    aria-label="Enter your email"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
                rules={{
                  required: "Invalid credentials",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid credentials",
                  },
                }}
              />

              <View className="flex gap-1 mb-6">
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomInputWithIcon
                      placeholderTitle="Enter your password"
                      aria-label="Enter your password"
                      icon={EyeIcon}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="password"
                  rules={{
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Invalid credentials",
                    },
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
              onPress={handleSubmit(onSubmit)}
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
