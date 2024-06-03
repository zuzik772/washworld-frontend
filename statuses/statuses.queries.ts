import { Status } from "../types/Location";
import axios from "axios";
import getUserFromSecureStorage from "../utils/getUserFromSecureStorage";

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
    const parsedUser = await getUserFromSecureStorage();
    const token = parsedUser.access_token;
    const role = parsedUser.role;
    const response = await axios.put(
      `${baseUrl}/statuses/${hall_id}`,
      newStatusID,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Role: role,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating status", error);
  }
};

export default fetchStatuses;
