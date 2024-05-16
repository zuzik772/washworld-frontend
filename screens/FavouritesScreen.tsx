import { Text } from "@gluestack-ui/themed";
import Layout from "../components/Layout";
import FavouriteLocationCard from "../components/FavouriteLocationCard";

const FavouritesScreen = () => {
  return (
    <Layout>
      <Text className="text-white font-bold text-2xl text-center my-10">
        Your Favourites
      </Text>
      <FavouriteLocationCard />
    </Layout>
  );
};

export default FavouritesScreen;
