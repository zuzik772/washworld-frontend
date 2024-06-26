import {
  Text,
  View,
  Pressable,
  Icon,
  CloseIcon,
  FavouriteIcon,
} from "@gluestack-ui/themed";
import { useGetHalls } from "../halls/halls.hooks";
import { useGetStatuses } from "../statuses/statuses.hooks";
import {
  getHallsStatus,
  getLocationStatus,
  getColorStatus,
  statusColorMap,
} from "../utils/colorStatus";
import { calculateDistance, openGoogleMaps } from "../utils/mapCalculations";
import NavButton from "./NavButton";
import { MapStackParamList } from "../navigation/MapStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Location } from "../types/Location";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchAllFavoriteLocations,
  addFavoriteLocation,
  removeFavoriteLocation,
  loadUser,
} from "../store/userSlice";

type LocationCardProps = {
  location: Location;
  mapRegion: {
    latitude: number;
    longitude: number;
  };
  setSelectedLocation: (location: Location | null) => void;
  navigation: NativeStackNavigationProp<MapStackParamList, "MapScreen">;
};
const LocationCard = ({
  location,
  mapRegion,
  setSelectedLocation,
  navigation,
}: LocationCardProps) => {
  const dispatch: AppDispatch = useDispatch();

  const { data: halls } = useGetHalls(location?.location_id);
  const { data: statuses } = useGetStatuses();
  const user_id = useSelector((state: RootState) => state.user.user?.user_id);
  const favoriteLocations = useSelector(
    (state: RootState) => state.user.favoriteLocations
  );

  const isFavorite =
    favoriteLocations
      ?.map((favoriteLocation) => favoriteLocation.location_id)
      .includes(location.location_id) || false;

  const handleFavoritePress = () => {
    if (isFavorite) {
      if (user_id && location.location_id) {
        dispatch(
          removeFavoriteLocation({ user_id, location_id: location.location_id })
        );
      }
    } else {
      if (user_id && location.location_id) {
        dispatch(
          addFavoriteLocation({ user_id, location_id: location.location_id })
        );
      }
    }
  };
  useEffect(() => {
    user_id && dispatch(fetchAllFavoriteLocations(user_id));
  }, [user_id, isFavorite]);

  if (!halls || !statuses) return null;
  const hallsStatus = getHallsStatus({ halls, statuses });
  const locationStatus = getLocationStatus(hallsStatus as string[]);
  const colorClass = getColorStatus({ locationStatus, statusColorMap });

  const calculatedDistance = calculateDistance(
    mapRegion.latitude,
    mapRegion.longitude,
    location.latitude,
    location.longitude
  );
  const distance = calculatedDistance.toFixed(1);
  const locationTitle = location?.address.split(" ").pop();

  return (
    <View className="absolute bottom-[180px] left-4 right-4 mx-auto p-3 bg-secondaryGray90 flex gap-2 rounded-lg z-50">
      <View className="w-10 h-10 absolute right-2 top-2">
        <Pressable onPress={() => setSelectedLocation(null)}>
          <Icon as={CloseIcon} color="$colors$primaryWhite" />
        </Pressable>
      </View>
      <View className="flex-row items-center gap-2">
        <View className="w-9 h-9">
          <Pressable onPress={handleFavoritePress}>
            <Icon
              as={FavouriteIcon}
              color={
                isFavorite ? "$colors$primaryGreen" : "$colors$primaryWhite"
              }
            />
          </Pressable>
        </View>
        <Text className="text-primaryWhite text-xl font-semibold">
          {locationTitle}
        </Text>
      </View>
      <Text className="text-primaryWhite underline">{location.address}</Text>

      <Text className="font-bold text-lg" color={`${colorClass}`}>
        {locationStatus}
      </Text>

      <View className="flex-row gap-2 items-center justify-between">
        <NavButton
          title="Navigation"
          onPress={() => openGoogleMaps(location.latitude, location.longitude)}
          secondary={true}
        />
        <NavButton
          title="Select"
          onPress={() =>
            navigation.navigate("Location", {
              locationTitle: locationTitle,
              distance: parseFloat(distance),
              locationId: location.location_id,
              locationStatus: locationStatus,
            })
          }
          disabled={false}
        />
      </View>
    </View>
  );
};

export default LocationCard;
