import React from "react";
import Layout from "../../components/Layout";
import { Heading, ScrollView, View } from "@gluestack-ui/themed";
import PackageCard from "../../components/PackageCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Package } from "../../types/Subscription";

const PackageScreen = () => {
  const renderItem = ({ item, index }: { item: Package; index: number }) => {
    return <PackageCard key={index} subscription={item} />;
  };
  const subscriptions = useSelector(
    (state: RootState) => state.packages.packages
  );
  return (
    <Layout>
      <View className="flex items-center  mt-6">
        <Heading fontSize={25} className="text-primaryWhite">
          Select Wash
        </Heading>
      </View>
      {/* <View>
        <SwiperFlatList
          data={subscriptions}
          showPagination
          renderItem={({ item }) => (
            <View>
              <PackageCard subscription={item}></PackageCard>
            </View>
          )}
        />
      </View> */}
      {/* <ScrollView className="px-2" horizontal>
        {subscriptions.map((subscription, index) => (
          <PackageCard key={index} subscription={subscription} />
        ))}
      </ScrollView> */}
    </Layout>
  );
};

export default PackageScreen;
