import {
  Icon,
  CloseIcon,
  FavouriteIcon,
  View,
  Pressable,
} from "@gluestack-ui/themed";
import { useGetHalls } from "../halls/halls.hooks";
import NavButton from "./NavButton";
import { Location } from "../types/location";

const LocationCard = ({ location }: { location: Location }) => {
  const { data: halls } = useGetHalls(location?.location_id);
  const statusArray = ["Ready", "Busy", "Unavailable"];
  const hallsStatusIds = halls?.map((hall) => hall.status_id);
  console.log("hallsStatusIds", hallsStatusIds);
  const hallsStatus = hallsStatusIds?.map((id) => {
    return statusArray[id - 1];
  });

  console.log("hereeeeee", hallsStatus);

  const statusColorMap = {
    Ready: "#0ECC6D",
    Busy: "#ff6b06",
    Unavailable: "#d71515",
  };

  let locationStatus: string = "";
  let colorClass: string = "";

  if (statusArray.includes("Ready")) {
    locationStatus = "Ready";
  } else if (!hallsStatus?.includes("Ready") && hallsStatus?.includes("Busy")) {
    locationStatus = "Busy";
  } else if (hallsStatus?.every((status) => status === "Busy")) {
    locationStatus = "Busy";
  } else if (hallsStatus?.every((status) => status === "Unavailable")) {
    locationStatus = "Unavailable";
  }

  colorClass = statusColorMap[locationStatus as keyof typeof statusColorMap];

  const navigateToLocation = () =>
    openGoogleMaps(location.latitude, location.longitude);

  const calculatedDistance = calculateDistance(
    mapRegion.latitude,
    mapRegion.longitude,
    location.latitude,
    location.longitude
  );
  const distance = calculatedDistance.toFixed(1);
  return (
    <View className="absolute bottom-[180px] left-4 right-4 mx-auto p-3 bg-secondaryGray90 flex gap-2 rounded-lg">
      <View className="w-10 h-10 absolute right-2 top-2">
        <Pressable onPress={() => setSelectedLocation(null)}>
          <Icon as={CloseIcon} color="$colors$primaryWhite" />
        </Pressable>
      </View>
      <View className="flex-row items-center gap-2">
        <View className="w-9 h-9">
          <Pressable onPress={() => setIsFavourite((prevState) => !prevState)}>
            <Icon
              as={FavouriteIcon}
              color={
                isFavourite ? "$colors$primaryGreen" : "$colors$primaryWhite"
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
          onPress={navigateToLocation}
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
