import { Text } from "@gluestack-ui/themed";

enum Status {
  READY = "READY",
  BUSY = "BUSY",
  CLOSED = "CLOSED",
}

// Convert enum values to an array
const statusValues = Object.values(Status);

// Function to get a random status
const getRandomStatus = () => {
  const randomIndex = Math.floor(Math.random() * statusValues.length);
  return statusValues[randomIndex];
};
const statusColorMapping = {
  [Status.READY]: "primaryGreen",
  [Status.BUSY]: "secondaryOrange",
  [Status.CLOSED]: "tertiaryAlert",
};

const getStatusColorClass = (status: Status) => {
  const colorName = statusColorMapping[status];
  return colorName;
};

const RandomStatus = () => {
  const status = getRandomStatus();
  console.log(status);
  const colorClass = getStatusColorClass(status);
  console.log(colorClass);
  return <Text className={`text-${colorClass} font-bold`}>{status}</Text>;
};

export default RandomStatus;
