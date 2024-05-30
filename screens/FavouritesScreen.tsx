import { ScrollView, Text } from "@gluestack-ui/themed";
import Layout from "../components/Layout";
import FavouriteLocationCard from "../components/FavouriteLocationCard";
import { useGetLocations } from "../locations/locations.hooks";
import { Location } from "../types/Location";

const FavouritesScreen = () => {
  // const locations: Location[] = []; // to be replaced with redux state - find user's favourite locations
  return (
    <Layout>
      <Text className="text-white font-bold text-2xl text-center my-10">
        Your Favourites
      </Text>
      <ScrollView className="h-screen">
        {/* {locations
      ?.filter((location) => location.isFavourite)
      .map((location) => (
        <FavouriteLocationCard
          key={location.location_id}
          location={location}
        />
      ))} */}
      </ScrollView>
    </Layout>
  );
};

export default FavouritesScreen;
