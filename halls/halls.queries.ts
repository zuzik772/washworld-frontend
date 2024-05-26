import { Hall } from "../types/Location";
import axios from "axios";

const fetchHalls = async (location_id: number): Promise<Hall[]> => {
  const baseUrl = process.env.baseUrl;
  try {
    const response = await axios.get(
      `http://192.168.246.161:3000/halls/${location_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching halls", error);
    return [];
  }
};

export default fetchHalls;
