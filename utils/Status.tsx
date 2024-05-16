import { Text } from "@gluestack-ui/themed";

export enum Status {
  READY = "READY",
  BUSY = "BUSY",
  CLOSED = "CLOSED",
}

// Convert enum values to an array
const statusValues = Object.values(Status);
export const statusColorMapping = {
  [Status.READY]: "#0ECC6D",
  [Status.BUSY]: "#ff6b06",
  [Status.CLOSED]: "#d71515",
};
// Function to get a random status
export const getRandomStatus = () => {
  const randomIndex = Math.floor(Math.random() * statusValues.length);
  return statusValues[randomIndex];
};

// In Status.tsx or wherever RandomStatus is defined
export const getStatusColor = (status: Status) => {
  return statusColorMapping[status];
};

const RandomStatus = () => {
  const status = getRandomStatus();
  console.log(status);
  return status;
};

export default RandomStatus;
