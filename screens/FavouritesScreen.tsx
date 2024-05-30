import { ScrollView, Text } from "@gluestack-ui/themed";
import Layout from "../components/Layout";
import FavouriteLocationCard from "../components/FavouriteLocationCard";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllFavoriteLocations } from "../store/userSlice";

const FavouritesScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const user_id = useSelector((state: RootState) => state.user.user?.user_id);
  const favoriteLocations = useSelector(
    (state: RootState) => state.user.favoriteLocations
  );
  useEffect(() => {
    user_id && dispatch(fetchAllFavoriteLocations(user_id));
  }, [user_id]);

  return (
    <Layout>
      <Text className="text-white font-bold text-2xl text-center my-10">
        Your Favourites
      </Text>
      <ScrollView className="h-screen">
        {favoriteLocations ? (
          favoriteLocations?.map((location) => (
            <FavouriteLocationCard
              key={location.location_id}
              location={location}
            />
          ))
        ) : (
          <Text className="text-white text-center text-xl">
            No favourite locations
          </Text>
        )}
      </ScrollView>
    </Layout>
  );
};

export default FavouritesScreen;
