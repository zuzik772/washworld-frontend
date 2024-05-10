import { Button, ButtonText } from "@gluestack-ui/themed";

type NavButtonProps = {
  title: string;
  onPress: () => void;
  disabled: boolean;
};
const NavButton = ({ title, onPress, disabled }: NavButtonProps) => {
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      padding={14}
      className={`bg-primaryGreen w-48 ${disabled && "opacity-40"}`}
    >
      <ButtonText
        className={"text-xl text-center font-bold uppercase text-white"}
      >
        {title}
      </ButtonText>
    </Button>
  );
};

export default NavButton;
