import React, { useState } from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { View, Text, ScrollView } from "@gluestack-ui/themed";
import WashProgress from "../../components/washScreen/WashProgress";
import NavButton from "../../components/NavButton";
import CustomModal from "../../components/CustomModal";

type Props = NativeStackScreenProps<MapStackParamList, "Wash">;
const WashScreen = ({ navigation }: Props) => {
  const demoSelectedWashtype = "Gold";

  const [currentState, setCurrentState] = useState("");

  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [forceStop, setForceStop] = useState(false);

  return (
    <>
      <Layout>
        <CustomModal
          isVisible={showEmergencyModal}
          changeVisibility={setShowEmergencyModal}
          title="Emergency Stop"
          description="Are you sure you want to stop the wash?"
          buttons={[
            {
              title: "Cancel",
              type: "normal",
              onPress: () => {},
            },
            {
              title: "STOP",
              type: "danger",
              onPress: () => {
                setForceStop(true);
                navigation.navigate("PostWash");
              },
            },
          ]}
        />
        <ScrollView>
          <View className="my-4 flex flex-col gap-1">
            <Text
              className="text-white text-center text-xl"
              style={{
                fontFamily: "Gilroy-Medium",
              }}
            >
              Wash Type
            </Text>
            <Text
              className="text-primaryGreen text-center text-6xl"
              style={{
                fontFamily: "Gilroy-ExtraBold",
              }}
            >
              {demoSelectedWashtype}
            </Text>
            <Text
              className="text-white text-center text-2xl"
              style={{
                fontFamily: "Gilroy-Medium",
              }}
            >
              Status
            </Text>
            <Text
              className="text-white text-center text-3xl"
              style={{
                fontFamily: "Gilroy-ExtraBold",
              }}
            >
              {currentState}
            </Text>
          </View>

          <WashProgress
            washType={demoSelectedWashtype}
            onStateChange={(state) => setCurrentState(state)}
            onComplete={() => navigation.navigate("PostWash")}
            forceStop={forceStop}
          />

          <View className="flex flex-col items-center mt-8 gap-4 mb-8">
            <NavButton
              title="EMERGENCY STOP"
              danger
              width="75%"
              onPress={() => setShowEmergencyModal(true)}
            />
            <Text className="text-primaryGreen underline">Need help?</Text>
          </View>
        </ScrollView>
      </Layout>
    </>
  );
};

export default WashScreen;
