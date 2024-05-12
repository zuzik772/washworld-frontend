import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Box, Heading, ScrollView, View } from "@gluestack-ui/themed";
import PackageCard from "../../components/PackageCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";

type LocationScreenProps = NativeStackScreenProps<MapStackParamList>;

const PackageScreen = ({ navigation }: LocationScreenProps) => {
  const packages = useSelector((state: RootState) => state.packages.packages);
  const width = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Layout>
      <ScrollView>
        <View className="flex items-center">
          <Heading fontSize={25} className="text-primaryWhite">
            Select Wash
          </Heading>
        </View>
        <View className="flex flex-row gap-2 items-center justify-center mb-7">
          <Box
            className={
              currentIndex === 0
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          ></Box>
          <Box
            className={
              currentIndex === 1
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          ></Box>
          <Box
            className={
              currentIndex === 2
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          ></Box>
          <Box
            className={
              currentIndex === 3
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          ></Box>
          <Box
            className={
              currentIndex === 4
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          ></Box>
        </View>
        <Carousel
          loop={false}
          width={width / 2}
          height={600}
          style={{ width: width }}
          snapEnabled
          data={packages}
          onScrollEnd={setCurrentIndex}
          scrollAnimationDuration={500}
          renderItem={({ item, index }) => (
            <PackageCard
              navigation={navigation}
              key={index}
              subscription={item}
            /> //using subscription instead of "package", because "package" is a reserved keyword
          )}
        />
      </ScrollView>
    </Layout>
  );
};

export default PackageScreen;
