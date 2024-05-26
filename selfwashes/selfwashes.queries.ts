import { SelfWash } from "../types/Location";
import axios from "axios";

const fetchSelfwashes = async (location_id: number): Promise<SelfWash[]> => {
  const baseUrl = process.env.baseURL;
  try {
    const response = await axios.get(`${baseUrl}/selfwashes/${location_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching selfwashes", error);
    return [];
  }
};

export default fetchSelfwashes;
