import { ChevronLeftIcon, Icon, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} className="w-12 h-12">
      <Icon
        as={ChevronLeftIcon}
        color="$colors$primaryGreen"
        fill={"$colors$secondaryGray90"}
      />
    </Pressable>
  );
};

export default GoBackButton;
