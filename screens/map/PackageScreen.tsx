import React from "react";
import Layout from "../../components/Layout";
import { Heading, View } from "@gluestack-ui/themed";
import PackageCard from "../../components/PackageCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";

const PackageScreen = () => {
  const packages = useSelector((state: RootState) => state.packages.packages);
  const width = Dimensions.get("window").width;

  return (
    <Layout>
      <View className="flex items-center mt-6">
        <Heading fontSize={25} className="text-primaryWhite">
          Select Wash
        </Heading>
      </View>
      <Carousel
        width={width / 2}
        height={width * 2}
        style={{ width: width }}
        snapEnabled
        data={packages}
        scrollAnimationDuration={500}
        renderItem={({ item, index }) => (
          <PackageCard key={index} subscription={item} /> //using subscription instead of "package", because "package" is a reserved keyword
        )}
      />
    </Layout>
  );
};

export default PackageScreen;
