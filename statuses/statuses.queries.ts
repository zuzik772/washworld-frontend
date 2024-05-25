import { Status } from "../types/Location";
import axios from "axios";

const fetchStatuses = async (): Promise<Status[]> => {
  const baseUrl = process.env.baseUrl;
  try {
    const response = await axios.get(`${baseUrl}/statuses`);
    console.log("Statuses fetched", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching statuses", error);
    return [];
  }
};

export default fetchStatuses;
