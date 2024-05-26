import { Status } from "../types/Location";
import axios from "axios";

const fetchStatuses = async (): Promise<Status[]> => {
  const baseUrl = process.env.baseUrl;
  console.log(baseUrl);

  try {
    const response = await axios.get(`http://192.168.246.161:3000/statuses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching statuses", error);
    return [];
  }
};

export default fetchStatuses;
