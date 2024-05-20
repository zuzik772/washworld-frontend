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
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from "@gluestack-ui/themed";

import { Keyboard, TouchableWithoutFeedback } from "react-native";
import CustomInput from "../components/inputs/CustomInput";
import CustomInputWithIcon from "../components/inputs/CustomInputWithIcon";

type Props = NativeStackScreenProps<MapStackParamList, "Login">;
const LoginScreen = ({ navigation }: Props) => {
  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex items-center gap-8 mt-20">
          <Text className="text-primaryWhite text-3xl font-extrabold">
            Login
          </Text>
          <FormControl className="w-[26rem] flex gap-8">
            <View>
              <FormControlLabel>
                <FormControlLabelText className="text-white pb-2">
                  Email:
                </FormControlLabelText>
              </FormControlLabel>
              <CustomInput
                placeholderTitle="Enter your email"
                aria-label="Enter your email"
              />
            </View>

            <View className="flex gap-1 mb-6">
              <FormControlLabel>
                <FormControlLabelText className="text-white pb-2">
                  Password:
                </FormControlLabelText>
              </FormControlLabel>
              <CustomInputWithIcon
                placeholderTitle="Enter your password"
                aria-label="Enter your password"
                icon={EyeIcon}
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
            onPress={() => navigation.navigate("SignUp")}
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
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default LoginScreen;
