import { location } from "../types/Location";
import { locations } from "../utils/locationsData";
const fetchLocations = () => {
  return locations;
};

export default fetchLocations;

export const updateLocation = (locationData: location) => {
  const updatedLocation = locations.map((loc) => {
    if (loc.location_id === locationData.location_id) {
      console.log("locationData", locationData);
      return locationData;
    }
    return loc;
  });

  return updatedLocation;
};
