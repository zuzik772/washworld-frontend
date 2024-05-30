import { Location } from "../types/Location";
import axios from "axios";

const fetchLocations = async (): Promise<Location[]> => {
  const baseUrl = process.env.baseURL;
  try {
    const response = await axios.get(`${baseUrl}/locations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations", error);
    return [];
  }
};

export default fetchLocations;
