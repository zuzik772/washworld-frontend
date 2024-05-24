import { View, Text, Button, Pressable } from "@gluestack-ui/themed";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ReportDamageScreen = () => {
  const [facing, setFacing] = useState<"back" | "front">("back");
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return (
      <View>
        <Text>Waiting for permission...</Text>
      </View>
    );
  }

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet.
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ textAlign: "center" }}>
  //         We need your permission to show the camera
  //       </Text>
  //       <Button onPress={requestPermission} title="grant permission" />
  //     </View>
  //   );
  // }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  return (
    <Layout>
      <CameraView
        style={{
          flex: 1,
        }}
        facing={facing}
      >
        <View className="flex justify-end items-end h-full p-8">
          <Pressable
            onPress={toggleCameraFacing}
            className="bg-primaryGreen w-20 h-20 rounded-full flex items-center justify-center"
          >
            <MaterialIcons name="flip-camera-ios" size={40} color="white" />
          </Pressable>
        </View>
      </CameraView>
    </Layout>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "transparent",
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: "flex-end",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//   },
// });

export default ReportDamageScreen;
