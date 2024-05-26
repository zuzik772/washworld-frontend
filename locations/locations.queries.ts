import { Location } from "../types/Location";
import axios from "axios";

const fetchLocations = async (): Promise<Location[]> => {
  const baseUrl = process.env.baseUrl;
  try {
    const response = await axios.get(`http://192.168.246.161:3000/locations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations", error);
    return [];
  }
};

export default fetchLocations;
