import { View } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { Heading } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SubscriptionCard from "../../components/SubscriptionCard";
import { Subscription } from "../../types/subscription";
import { SwiperFlatList } from "react-native-swiper-flatlist";

type Props = NativeStackScreenProps<MapStackParamList, "Package">;
const PackageScreen = ({ navigation }: Props) => {
  const subscriptions = useSelector(
    (state: RootState) => state.subscriptions.subscriptions
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const renderBox = (index: number) => {
    const isActive = index === activeIndex;
    return (
      <View
        className={`h-1 ${
          isActive ? "w-9 bg-primaryGreen" : "w-6 bg-primaryGreen opacity-55"
        }`}
        key={index}
      />
    );
  };

  const chunkArray = (array: Subscription[], size: number) => {
    //used to determine how many cards are displayed per row
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
  };

  // return (
  //   <Layout>
  //     <View className=" flex justify-center items-center">
  //       <Heading fontSize={30} className=" text-primaryWhite">
  //         Select Wash
  //       </Heading>
  //       <View className="flex gap-3 items-center justify-center flex-row w-full mb-3">
  //         {[...Array(3)].map((_, index) => renderBox(index))}
  //       </View>
  //     </View>

  //     {chunkArray(subscriptions, 2).map((subscriptionChunk, index) => (
  //       <View className="flex flex-row justify-center items-center gap-6 mt-3">
  //         {subscriptionChunk.map((subscription: Subscription, index) => (
  //           <SubscriptionCard subscription={subscription} key={index} />
  //         ))}
  //       </View>
  //     ))}
  //   </Layout>
  // );
  return (
    <Layout>
      <View className=" flex justify-center items-center">
        <Heading fontSize={30} className=" text-primaryWhite">
          Select Wash
        </Heading>
        <View className="flex gap-3 items-center justify-center flex-row w-full mb-3">
          {[...Array(3)].map((_, index) => renderBox(index))}
        </View>
      </View>
      <SwiperFlatList
        index={2}
        data={subscriptions}
        renderItem={({ item: subscription }) => (
          <View className="flex flex-row justify-center items-center mt-3">
            <SubscriptionCard subscription={subscription} />
          </View>
        )}
      />
    </Layout>
  );
};

export default PackageScreen;
