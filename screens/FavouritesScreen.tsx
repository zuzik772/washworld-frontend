import { ScrollView, Text } from "@gluestack-ui/themed";
import Layout from "../components/Layout";
import FavouriteLocationCard from "../components/FavouriteLocationCard";
import { useGetLocations } from "../locations/locations.hooks";

const FavouritesScreen = () => {
  const { data: locations, isPending, isError, error } = useGetLocations();
  return (
    <Layout>
      <Text className="text-white font-bold text-2xl text-center my-10">
        Your Favourites
      </Text>
      {isPending && <Text>Loading...</Text>}
      {isError && <Text>Error: {error.message}</Text>}
      <ScrollView>
        {locations
          ?.filter((location) => location.isFavourite)
          .map((location) => (
            <FavouriteLocationCard
              key={location.location_id}
              location={location}
            />
          ))}
      </ScrollView>
    </Layout>
  );
};

export default FavouritesScreen;
