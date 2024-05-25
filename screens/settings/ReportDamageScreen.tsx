import {
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  FormControl,
  ButtonGroup,
  Image,
} from "@gluestack-ui/themed";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomInput from "../../components/inputs/CustomInput";
import CustomInputWithIcon from "../../components/inputs/CustomInputWithIcon";
import NavButton from "../../components/NavButton";

const ReportDamageScreen = () => {
  const [facing, setFacing] = useState<"back" | "front">("back");
  const [permission, requestPermission] = useCameraPermissions();

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [camera, setCamera] = useState<CameraView>();
  const [imageUri, setImageUri] = useState<string | undefined>();

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    console.log("Camera is open", isCameraOpen);
    requestPermission();
  }, [isCameraOpen]);

  if (!permission) {
    // Camera permissions are still loading.
    return (
      <View>
        <Text>Waiting for permission...</Text>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync({
        quality: 0.5,
        base64: true,
      });

      if (data) {
        console.log(data.uri);
        setImageUri(data.uri);
      }
    }
  };

  return (
    <Layout>
      <ScrollView className="h-full">
        <View className="flex flex-col gap-8 h-full p-4">
          <View className="flex flex-col justify-center items-center">
            <Text
              className="text-primaryGreen text-4xl"
              style={{
                fontFamily: "Gilroy-ExtraBold",
              }}
            >
              Report Damage
            </Text>
            <Text
              className="text-white text-xl p-4"
              style={{
                fontFamily: "Gilroy-Medium",
              }}
            >
              Did you experience any issues with your wash? Fill out the form
              below to report any problems and damages, and we'll get back to
              you as soon as possible.
            </Text>
          </View>

          <FormControl className="flex gap-4 items-center">
            <CustomInput
              placeholderTitle="When did the issue occur?"
              aria-label="When did the issue occur?"
            />

            <CustomInput
              placeholderTitle="Describe the issue you experienced"
              aria-label="Describe the issue you experienced"
            />

            <Pressable
              className="bg-secondaryGray80 w-32 h-32 flex justify-center items-center relative"
              onPress={() => {
                setImageUri(undefined);
                setIsCameraOpen(true);
              }}
            >
              <MaterialIcons
                name="camera-alt"
                size={42}
                color="white"
                className="opacity-75 absolute z-10"
              />
              <Image
                source={{ uri: imageUri }}
                className="h-full w-full"
                alt="Image"
              />
            </Pressable>
            <Button
              onPress={() => console.log("pressed")}
              className="w-full p-4 flex flex-row gap-2 justify-center items-center bg-primaryGreen"
            >
              <Text className="text-white text-xl">Send report</Text>
            </Button>
          </FormControl>
        </View>
      </ScrollView>

      {isCameraOpen &&
        (imageUri ? (
          <>
            <View className="w-full h-full top-0 left-0 absolute bg-primaryBlack flex justify-center items-center">
              {/* <Text className="text-white text-4xl">Loading...</Text> */}
            </View>
            <Image
              source={{ uri: imageUri }}
              className="absolute w-full h-full top-0 left-0"
              alt="Image"
            />
            <View className="flex flex-row bottom-20 gap-2 w-full justify-center mb-2">
              <NavButton
                title="Retake"
                onPress={() => setImageUri(undefined)}
                disabled={false}
                className="bg-secondaryGray60"
                width="45%"
              />
              <NavButton
                title="Submit"
                onPress={() => setIsCameraOpen(false)}
                disabled={false}
                width="45%"
              />
            </View>
          </>
        ) : (
          <CameraView
            style={{
              position: "absolute",
              flex: 1,
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
            ref={(ref) => setCamera(ref!)}
            facing={facing}
          >
            <View className="flex items-center justify-end h-full p-8 absolute w-full bottom-16">
              {/* Take Picture */}
              <Pressable
                onPress={takePicture}
                className="bg-primaryGreen w-28 h-28 rounded-full flex items-center justify-center"
              >
                <MaterialIcons name="camera" size={40} color="white" />
              </Pressable>

              {/* Camera Switcher */}
              <Pressable
                onPress={toggleCameraFacing}
                className="bg-secondaryGray90 absolute w-20 h-20 rounded-full right-2 bottom-8 flex justify-center items-center"
              >
                <MaterialIcons name="flip-camera-ios" size={40} color="white" />
              </Pressable>
            </View>
          </CameraView>
        ))}
    </Layout>
  );
};

export default ReportDamageScreen;
