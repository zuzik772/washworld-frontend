import { Status } from "../types/Location";
import axios from "axios";

const fetchStatuses = async (): Promise<Status[]> => {
  const baseUrl = process.env.baseURL;
  try {
    const response = await axios.get(`${baseUrl}/statuses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching statuses", error);
    return [];
  }
};

export const updateHallStatus = async (
  hall_id: number,
  newStatusID: Partial<Status>
) => {
  const baseUrl = process.env.baseURL;
  try {
    const response = await axios.put(
      `${baseUrl}/statuses/${hall_id}`,
      newStatusID
    );
    return response.data;
  } catch (error) {
    console.error("Error updating status", error);
  }
};

export default fetchStatuses;
