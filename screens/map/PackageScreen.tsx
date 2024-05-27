import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Box, Heading, ScrollView, View } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MapStackParamList } from "../../navigation/MapStackParamList";
import { Membership } from "../../types/Membership";
import SubscriptionCard from "../../components/SubscriptionCard";
import NavButton from "../../components/NavButton";
import { selectMembership } from "../../store/selectedMembershipSlice";
import { fetchMembershipsWithFeatures } from "../../store/membershipsSlice";

type PackageCardProps = {
  navigation: NativeStackNavigationProp<MapStackParamList, "PreWash">;
};

const PackageScreen = ({ navigation }: PackageCardProps) => {
  const dispatch: AppDispatch = useDispatch();

  const handleSelect = (membership: Membership) => {
    dispatch(selectMembership(membership));
  };

  useEffect(() => {
    dispatch(fetchMembershipsWithFeatures());
  }, []);

  const packages: Membership[] = useSelector(
    (state: RootState) => state.memberships.memberships
  );

  const allFeatures = packages.map((membership) => membership.package.features);
  console.log("packages", packages);
  const width = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Layout>
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
          />
          <Box
            className={
              currentIndex === 1
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          />
          <Box
            className={
              currentIndex === 2
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          />
          <Box
            className={
              currentIndex === 3
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          />
          <Box
            className={
              currentIndex === 4
                ? "w-10 h-1 bg-primaryGreen transition-all"
                : "w-7 h-1 bg-primaryGreen opacity-50 transition-all"
            }
          />
        </View>
        <Carousel
          loop={false}
          width={width}
          height={600}
          snapEnabled
          data={packages}
          onScrollEnd={setCurrentIndex}
          scrollAnimationDuration={500}
          renderItem={({ item, index }) => (
            <SubscriptionCard
              key={index}
              navigation={navigation}
              subscription={item}
              allFeatures={allFeatures.flat()}
            />
          )}
        />
      </Layout>
      <View className="w-full h-24 bottom-[6.4rem] flex flex-row justify-center items-center relative">
        <View className="w-full h-full absolute bg-primaryBlack opacity-35" />
        <NavButton
          title="Select"
          onPress={() => {
            handleSelect(packages[currentIndex]);
            navigation.navigate("PreWash");
          }}
          disabled={false}
        />
      </View>
    </>
  );
};

export default PackageScreen;
