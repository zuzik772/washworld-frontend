import { ChevronLeftIcon, Icon, Pressable, View } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <View className="w-10 h-10">
        <Icon as={ChevronLeftIcon} color="$primaryGreen" />
      </View>
    </Pressable>
  );
};

export default GoBackButton;
