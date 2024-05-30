import { View, Text } from "@gluestack-ui/themed";
import { useGetHalls } from "../halls/halls.hooks";
import { useGetSelfWashes } from "../selfwashes/selfwashes.hooks";

type Badge = {
  text: string;
};

type BadgeListProps = {
  locationId: number;
};

const BadgesList = ({ locationId }: BadgeListProps) => {
  const { data: halls } = useGetHalls(locationId);
  const { data: selfwashes } = useGetSelfWashes(locationId);

  const badges: Badge[] = [
    { text: `${halls?.length} Washing halls` },
    { text: `${selfwashes?.length} Self wash stations` },
    { text: "Environmentally friendly" },
    { text: "Easy Payment" },
    { text: "Short Queue time" },
  ];
  return (
    <View className="mt-7 mb-14 gap-3 flex flex-row flex-wrap ml-5 ">
      {badges.map((badge, index) => (
        <Text
          key={index}
          className="bg-secondaryGray90 border-2 border-primaryGreen rounded-sm px-3 py-1 text-primaryGreen"
        >
          {badge.text}
        </Text>
      ))}
    </View>
  );
};

export default BadgesList;
