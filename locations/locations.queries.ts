import { Location } from "../types/location";
import axios from "axios";

const fetchLocations = async (): Promise<Location[]> => {
  const baseUrl = process.env.baseUrl;
  try {
    const response = await axios.get(`${baseUrl}/locations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations", error);
    return [];
  }
};

export default fetchLocations;

// export const updateLocation = (locationData: Location) => {
//   const updatedLocation = locations.map((loc) => {
//     if (loc.location_id === locationData.location_id) {
//       console.log("locationData", locationData);
//       return locationData;
//     }
//     return loc;
//   });

//   return updatedLocation;
// };
