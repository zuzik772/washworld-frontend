import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../navigation/MapStackParamList";
import NavButton from "../components/NavButton";
import Layout from "../components/Layout";
import {
  View,
  Text,
  Pressable,
  EyeIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  Link,
  LinkText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  CheckboxGroup,
  ScrollView,
} from "@gluestack-ui/themed";

import { Keyboard, TouchableWithoutFeedback } from "react-native";
import CustomInput from "../components/inputs/CustomInput";
import CustomInputWithIcon from "../components/inputs/CustomInputWithIcon";
import { useState } from "react";

type Props = NativeStackScreenProps<MapStackParamList, "SignUp">;

const SignUpScreen = ({ navigation }: Props) => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView>
          <View className="flex items-center gap-4 mt-6">
            <Text className="text-primaryWhite text-3xl font-extrabold">
              Create Profile
            </Text>
            <FormControl className="w-[26rem] flex gap-4">
              <View>
                <FormControlLabel>
                  <FormControlLabelText className="text-white pb-2">
                    Email:
                  </FormControlLabelText>
                </FormControlLabel>
                <CustomInput placeholderTitle="Enter your email" />
              </View>
              <View>
                <FormControlLabel>
                  <FormControlLabelText className="text-white pb-2">
                    Password:
                  </FormControlLabelText>
                </FormControlLabel>
                <CustomInputWithIcon
                  placeholderTitle="Enter your password"
                  icon={EyeIcon}
                />
              </View>
              <View>
                <FormControlLabel>
                  <FormControlLabelText className="text-white pb-2">
                    Repeat Password:
                  </FormControlLabelText>
                </FormControlLabel>
                <CustomInputWithIcon
                  placeholderTitle="Repeat your password"
                  icon={EyeIcon}
                />
              </View>
              <View className="flex gap-1">
                <FormControlLabel>
                  <FormControlLabelText className="text-white pb-2">
                    Phone Number:
                  </FormControlLabelText>
                </FormControlLabel>
                <CustomInput
                  placeholderTitle="Enter your phone number"
                  keyboardType="numeric"
                />
              </View>
            </FormControl>
            <CheckboxGroup
              value={values}
              onChange={(keys) => {
                setValues(keys);
              }}
              className="mt-2 mb-8 flex gap-4"
            >
              <Checkbox
                className="flex flex-row items-center gap-2 w-[26rem]"
                value="terms"
              >
                <CheckboxIndicator
                  className={`border-2 rounded-sm w-7 h-7 ${
                    values.includes("terms")
                      ? "bg-primaryGreen border-primaryGreen"
                      : "bg-transparent border-primaryGreen"
                  }`}
                >
                  <CheckboxIcon
                    as={CheckIcon}
                    width={20}
                    height={20}
                    color="$colors$secondaryGray90"
                    fill="$colors$primaryGreen"
                  />
                </CheckboxIndicator>
                <CheckboxLabel className="text-white flex items-center justify-center text-sm">
                  I accept Wash World's{" "}
                  <Link
                    href="https://washworld.dk/handelsbetingelser"
                    className="flex items-center justify-center"
                  >
                    <LinkText className="text-primaryGreen underline">
                      terms and conditions{" "}
                    </LinkText>
                  </Link>
                  and{" "}
                  <Link
                    href="https://washworld.dk/persondatapolitik"
                    className="underline"
                  >
                    <LinkText className="text-primaryGreen underline">
                      personal data policy
                    </LinkText>
                  </Link>
                </CheckboxLabel>
              </Checkbox>
              <Checkbox
                className="flex flex-row items-center gap-2 w-[26rem]"
                value="newsletter"
              >
                <CheckboxIndicator
                  className={`border-2 rounded-sm w-7 h-7 ${
                    values.includes("newsletter")
                      ? "bg-primaryGreen border-primaryGreen"
                      : "bg-transparent border-primaryGreen"
                  }`}
                >
                  <CheckboxIcon
                    as={CheckIcon}
                    width={20}
                    height={20}
                    color="$colors$secondaryGray90"
                    fill="$colors$primaryGreen"
                  />
                </CheckboxIndicator>
                <CheckboxLabel className="text-white flex items-center justify-center text-sm">
                  I agree that Wash World may send me electronic news and
                  offers. Consent can be revoked at any time via your profile.
                </CheckboxLabel>
              </Checkbox>
            </CheckboxGroup>
            <NavButton
              title="Sign up"
              onPress={() => navigation.navigate("MapScreen")}
              disabled={false}
            />
            <View className="flex items-center">
              <Text className="text-primaryWhite">
                Already have an account?
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text className="text-primaryGreen text-lg font-semibold underline">
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default SignUpScreen;
