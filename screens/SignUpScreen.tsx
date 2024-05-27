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
  ScrollView,
} from "@gluestack-ui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import CustomInput from "../components/inputs/CustomInput";
import CustomInputWithIcon from "../components/inputs/CustomInputWithIcon";
import { useState } from "react";
import { signUp } from "../store/userSlice";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";

type Props = NativeStackScreenProps<MapStackParamList, "SignUp">;

const SignUpScreen = ({ navigation }: Props) => {
  const [values, setValues] = useState<string[]>([]);
  const [date, setDate] = useState(new Date());

  const dispatch: AppDispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView className="h-screen">
          <View className="flex items-center gap-4 my-6">
            <Text className="text-primaryWhite text-3xl font-extrabold">
              Create Profile
            </Text>
            <FormControl className="w-[26rem] flex gap-4">
              <CustomInput
                placeholderTitle="Enter your first name"
                aria-label="Enter your first name"
                onChangeText={(e) => console.log(e.nativeEvent.text)}
              />
              <CustomInput
                placeholderTitle="Enter your last name"
                aria-label="Enter your last name"
                onChangeText={(e) => console.log(e.nativeEvent.text)}
              />
              <CustomInput
                placeholderTitle="Enter your email"
                aria-label="Enter your email"
                onChangeText={(e) => console.log(e.nativeEvent.text)}
              />
              <CustomInputWithIcon
                placeholderTitle="Enter your password"
                aria-label="Enter your password"
                icon={EyeIcon}
                onChangeText={(e) => console.log(e.nativeEvent.text)}
              />
              <CustomInputWithIcon
                placeholderTitle="Repeat your password"
                aria-label="Repeat your password"
                icon={EyeIcon}
                onChangeText={(e) => console.log(e.nativeEvent.text)}
              />
              <View className="flex items-center justify-between flex-row ml-2">
                <Text className="text-white text-lg">
                  Select your date of birth:
                </Text>
                <View className="bg-primaryGreen rounded-md p-2">
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || date;
                      setDate(currentDate);
                    }}
                    accentColor="white"
                  />
                </View>
              </View>
            </FormControl>
            <Checkbox
              className="flex flex-row items-center gap-2 w-[26rem]"
              value="terms"
              aria-label="Accept terms and conditions"
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
              aria-label="Subscribe to newsletter"
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
                I agree that Wash World may send me electronic news and offers.
                Consent can be revoked at any time via your profile.
              </CheckboxLabel>
            </Checkbox>
            <NavButton
              title="Sign up"
              onPress={async () => {
                const resultAction = await dispatch(
                  signUp({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    birthday: date,
                  })
                );
                if (signUp.fulfilled.match(resultAction)) {
                  navigation.navigate("MapScreen");
                }
              }}
              disabled={false}
              aria-label="Sign up"
            />
            <View className="flex items-center">
              <Text className="text-primaryWhite">
                Already have an account?
              </Text>
              <Pressable
                onPress={() => navigation.navigate("Login")}
                aria-label="Login"
              >
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
