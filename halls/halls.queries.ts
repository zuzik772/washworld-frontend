import { Hall } from "../types/location";
import axios from "axios";

const fetchHalls = async (location_id: number): Promise<Hall[]> => {
  const baseUrl = process.env.baseUrl;
  try {
    const response = await axios.get(`${baseUrl}/halls/${location_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching halls", error);
    return [];
  }
};

export default fetchHalls;
