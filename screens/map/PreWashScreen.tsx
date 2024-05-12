import { Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";

const PreWashScreen = ({ route }: any) => {
  const { packageName } = route.params;
  return (
    <Layout>
      <Text className="text-white">{packageName}</Text>
    </Layout>
  );
};

export default PreWashScreen;
