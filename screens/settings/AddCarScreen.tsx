import { ScrollView, Text, View } from "@gluestack-ui/themed";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import CustomInput from "../../components/inputs/CustomInput";
import CustomDropdown from "../../components/inputs/CustomDropdown";
import NavButton from "../../components/NavButton";

type VehicleTypes = "Sedan" | "SUV" | "Truck" | "Van" | "Motorcycle";
const AddCarScreen = () => {
  const [selectedVehicleType, setSelectedVehicleType] =
    useState<VehicleTypes>();
  return (
    <Layout>
      <View className="h-full flex items-center justify-between pt-16 pb-32">
        <View className="gap-4 flex items-center">
          <Text
            className="text-primaryWhite text-4xl"
            style={{
              fontFamily: "Gilroy-ExtraBold",
            }}
          >
            Add vehicle
          </Text>
          <CustomInput placeholderTitle={"License plate number"} />
          <CustomDropdown
            placeholderTitle={"Vehicle type"}
            items={["Sedan", "SUV", "Truck", "Van", "Motorcycle"]}
            onChange={(value) => {
              setSelectedVehicleType(value as VehicleTypes);
            }}
          />
        </View>
        <NavButton title="Add vehicle" className="" />
      </View>
    </Layout>
  );
};

export default AddCarScreen;
