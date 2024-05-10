import { CheckCircleIcon, Icon, View } from "@gluestack-ui/themed";

const CircleCheck = () => {
  return (
    <View className="w-8 h-8">
      <Icon
        as={CheckCircleIcon}
        fill="$colors$primaryGreen"
        color="$colors$secondaryGray90"
      />
    </View>
  );
};

export default CircleCheck;
