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
  CheckboxGroup,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import CustomInput from "../components/inputs/CustomInput";
import CustomInputWithIcon from "../components/inputs/CustomInputWithIcon";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { SignUpDto } from "../dto/signupDto";
import { signUp } from "../store/userSlice";
import { RootStackParamList } from "../navigation/RootStackParamList";
import { Platform } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;
type SignUpSchema = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  repeatPassword: string;
  birthday: string;
};

const SignUpScreen = ({ navigation }: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    setError,
  } = useForm<SignUpSchema>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      repeatPassword: "",
      birthday: new Date().toISOString(),
    },
  });
  const password = watch("password");
  const [values, setValues] = useState<string[]>([]);
  const defaultDate = new Date();
  defaultDate.setFullYear(defaultDate.getFullYear() - 20);
  const [date, setDate] = useState(defaultDate);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const onSubmit = (data: SignUpSchema) => {
    //remove repeat password from from form data
    const { repeatPassword, ...rest } = data;
    const signupDto = new SignUpDto(
      rest.first_name,
      rest.last_name,
      rest.email,
      rest.password,
      (rest.birthday =
        new Date(rest.birthday).toISOString().slice(0, 10) + "T00:00:00Z") // to ensure the date is interpreted as a timestamp at the start of the day in UTC, we append 'T00:00:00Z' to the date string
    );
    dispatch(signUp(signupDto))
      .unwrap()
      .then((res) => {
        console.log("signupDto", signupDto);
        navigation.navigate("Login");
      })
      .catch((error: any) => {
        console.log("signup error", error);
        if (error.statusCode === 409) {
          console.log("A user with this email already exists");
          setError("email", {
            message: "User with this email already exists",
          });
        }
      });
  };

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow()
  //   setDate(currentDate);
  //   setValue("birthday", currentDate.toISOString());
  // };

  const showDatepicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    hideDatePicker();
  };
  return (
    <Layout>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        aria-label="Dismiss keyboard"
      >
        <ScrollView className="h-screen">
          <View className="flex items-center gap-4 my-6 mb-10">
            <Text className="text-primaryWhite text-3xl font-extrabold">
              Create Profile
            </Text>
            <FormControl className="w-[26rem] flex gap-4">
              {errors.first_name && (
                <Text className="text-tertiaryAlert">
                  {errors.first_name.message}
                </Text>
              )}
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    placeholderTitle="Enter your first name"
                    onChangeText={(text) => onChange(text)}
                    value={value}
                  />
                )}
                name="first_name"
                rules={{
                  required: "First name is required",
                }}
              />
              {errors.last_name && (
                <Text className="text-tertiaryAlert">
                  {errors.last_name.message}
                </Text>
              )}
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    placeholderTitle="Enter your last name"
                    onChangeText={(text) => onChange(text)}
                    value={value}
                  />
                )}
                name="last_name"
                rules={{
                  required: "Last name is required",
                }}
              />
              {errors.email && (
                <Text className="text-tertiaryAlert">
                  {errors.email.message}
                </Text>
              )}
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    placeholderTitle="Enter your email"
                    onChangeText={(text) => onChange(text)}
                    value={value}
                  />
                )}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
              />
              {errors.password && (
                <Text className="text-tertiaryAlert">
                  {errors.password.message}
                </Text>
              )}
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInputWithIcon
                    placeholderTitle="Enter your password"
                    onChangeText={(text) => onChange(text)}
                    icon={EyeIcon}
                    value={value}
                  />
                )}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                }}
              />
              {errors.repeatPassword && (
                <Text className="text-tertiaryAlert">
                  {errors.repeatPassword.message}
                </Text>
              )}
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInputWithIcon
                    placeholderTitle="Repeat your password"
                    onChangeText={(text) => onChange(text)}
                    icon={EyeIcon}
                    value={value}
                  />
                )}
                name="repeatPassword"
                rules={{
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                }}
              />
              <View className="flex items-center justify-between flex-row">
                {/* <Text className="text-white text-lg">
                  Select your date of birth:
                </Text> */}
                <View className="border-primaryGreen border-[1px] rounded-md p-2 flex flex-row items-center justify-between w-full">
                  <Button onPress={showDatepicker} className="text-lg p-2">
                    <ButtonText className="text-white">
                      Select date of birth
                    </ButtonText>
                  </Button>
                  {isDatePickerVisible && (
                    <DateTimePicker
                      value={date}
                      mode="date"
                      display="default"
                      onChange={(event, selectedDate) => {
                        if (Platform.OS === "android") {
                          const currentDate = selectedDate || date;
                          setDate(currentDate);
                          setValue("birthday", currentDate.toISOString());
                          setDatePickerVisibility(false);
                        }
                      }}
                      accentColor="#34b566"
                      backgroundColor="white"
                      onConfirm={(selectedDate: Date) => {
                        if (Platform.OS === "ios") {
                          const currentDate = selectedDate || date;
                          setDate(currentDate);
                          setValue("birthday", currentDate.toISOString());
                          setDatePickerVisibility(false);
                        }
                      }}
                      onCancel={() => {
                        if (Platform.OS === "ios") {
                          setDatePickerVisibility(false);
                        }
                      }}
                    />
                  )}
                  {Platform.OS === "android" && (
                    <Text className="text-white">{date.toDateString()}</Text>
                  )}
                </View>
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
                  I agree that Wash World may send me electronic news and
                  offers. Consent can be revoked at any time via your profile.
                </CheckboxLabel>
              </Checkbox>
            </CheckboxGroup>
            <NavButton
              title="Sign up"
              onPress={handleSubmit(onSubmit)}
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
