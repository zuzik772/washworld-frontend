import Layout from "../../components/Layout";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NavButton from "../../components/NavButton";
import { FlatList, Text, View } from "@gluestack-ui/themed";
import CircleCheck from "../../components/CircleCheck";
import { useState, useEffect } from "react";

type Props = NativeStackScreenProps<MapStackParamList, "PreWash">;
const instructions = [
  "Close all windows tightly",
  "Lower or remove retractable antennas",
  "Close the sunroof if you have one!",
  "Keep the Vehicle in Neutral",
  "Keep Your Hands off the Steering Wheel",
  "Stay Off of the Brakes",
];
const PreWashScreen = ({ navigation }: Props) => {
  const [isCarInWashHall, setIsCarInWashHall] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCarInWashHall(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Layout>
      <View className="flex items-center my-4">
        <Text className="text-primaryWhite uppercase text-2xl font-extrabold">
          Hall 1
        </Text>
        <Text className="text-primaryGreen uppercase text-2xl font-extrabold ">
          Ready
        </Text>
        <Text className="text-primaryWhite text-xl font-extrabold mt-6">
          Prepare your vehicle
        </Text>
        <Text className="bg-primaryGreen h-1 w-full my-6"></Text>

        <FlatList
          data={instructions}
          renderItem={({ item }) => (
            <View className="flex-row gap-2 mb-2">
              <CircleCheck />
              <Text className="text-primaryWhite text-lg">
                {item as string}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text className="bg-primaryGreen h-1 w-full my-6"></Text>
      </View>
      <View className="flex items-center mt-8">
        {isCarInWashHall ? (
          <Text className="text-primaryWhite my-8">
            Car entered the wash hall, ready to start wash
          </Text>
        ) : (
          <Text className="text-primaryWhite my-8">
            Please enter the wash hall
          </Text>
        )}

        <NavButton
          title="Start"
          onPress={() => navigation.navigate("Wash")}
          disabled={!isCarInWashHall}
        />
      </View>
    </Layout>
  );
};

export default PreWashScreen;
