import { Button, ButtonText } from "@gluestack-ui/themed";
import { DimensionValue } from "react-native";

type NavButtonProps = {
  title: string;
  width?: string;
  danger?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  secondary?: boolean;
};
const NavButton = ({
  title,
  width = "50%",
  danger = false,
  onPress,
  disabled,
  secondary,
}: NavButtonProps) => {
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      padding={secondary ? 13 : 14}
      className={`${danger ? "bg-tertiaryAlert" : "bg-primaryGreen"} ${
        disabled && "opacity-40"
      } ${secondary && "border-[1px] border-primaryWhite bg-secondaryGray90"}`}
      style={{
        width: width as DimensionValue,
      }}
    >
      <ButtonText
        className={"text-xl text-center font-bold uppercase text-white"}
        style={{
          fontFamily: secondary ? "Gilroy-Medium" : "Gilroy-ExtraBold",
        }}
      >
        {title}
      </ButtonText>
    </Button>
  );
};

export default NavButton;
