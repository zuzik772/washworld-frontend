import { Button, ButtonText } from "@gluestack-ui/themed";

type NavButtonProps = {
  title: string;
  onPress: () => void;
};
const NavButton = ({ title, onPress }: NavButtonProps) => {
  return (
    <Button onPress={onPress} padding={20} className="bg-primaryGreen">
      <ButtonText className="text-white text-center">{title}</ButtonText>
    </Button>
  );
};

export default NavButton;
