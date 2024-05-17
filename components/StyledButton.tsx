import { Button, ButtonText } from "@gluestack-ui/themed";
import { DimensionValue } from "react-native";

type StyledButtonProps = {
  title: string;
  width?: string;
  danger?: boolean;
  onPress?: () => void;
  disabled?: boolean;
};
const StyledButton = ({
  title,
  width = "50%",
  danger = false,
  onPress,
  disabled,
}: StyledButtonProps) => {
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      padding={14}
      className={`${danger ? "bg-tertiaryAlert" : "bg-primaryGreen"} ${
        disabled && "opacity-40"
      }`}
      style={{
        width: width as DimensionValue,
      }}
    >
      <ButtonText
        className={"text-xl text-center font-bold uppercase text-white"}
        style={{
          fontFamily: "Gilroy-ExtraBold",
        }}
      >
        {title}
      </ButtonText>
    </Button>
  );
};

export default StyledButton;
