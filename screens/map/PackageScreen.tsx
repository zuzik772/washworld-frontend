import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Box, Heading, View } from "@gluestack-ui/themed";
import PackageCard from "../../components/PackageCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Carousel from "react-native-reanimated-carousel";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const PackageScreen = () => {
  const packages = useSelector((state: RootState) => state.packages.packages);
  const width = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Layout>
      <View className="flex items-center mt-3">
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
      </View>
      <Carousel
        loop={false}
        width={width / 2}
        height={width * 2}
        style={{ width: width }}
        snapEnabled
        data={packages}
        onScrollEnd={setCurrentIndex}
        scrollAnimationDuration={500}
        renderItem={({ item, index }) => (
          <PackageCard key={index} subscription={item} /> //using subscription instead of "package", because "package" is a reserved keyword
        )}
      />
    </Layout>
  );
};

export default PackageScreen;
