import React from "react";
import Layout from "../../components/Layout";
import { Heading, View } from "@gluestack-ui/themed";
import SubscriptionCard from "../../components/SubscriptionCard";

const PackageScreen = () => {
  return (
    <Layout>
      <View className="flex items-center  mt-6">
        <Heading fontSize={25} className="text-primaryWhite">
          Select Wash
        </Heading>
      </View>
      <View>
        <SubscriptionCard></SubscriptionCard>
      </View>
    </Layout>
  );
};

export default PackageScreen;
