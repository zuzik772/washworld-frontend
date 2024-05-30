import { Input, InputField } from "@gluestack-ui/themed";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

type Props = {
  placeholderTitle: string;
  keyboardType?: any;
  ariaLabel?: string;
  isReadOnly?: boolean;
  className?: string;
  onPress?: () => void;
  value?: string;
  icon?: [
    React.ComponentType<{ name: string; size: number; color: string }>,
    string
  ];
  onChangeText?: (text: string) => void;
};

const CustomInput = ({
  onChangeText,
  placeholderTitle,
  keyboardType,
  ariaLabel,
  isReadOnly = false,
  className,
  onPress,
  value,
  icon,
}: Props) => {
  const IconComponent = icon ? icon[0] : null;
  const iconName = icon ? icon[1] : "";
  return (
    <Input
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      isRequired={true}
      aria-label={ariaLabel || placeholderTitle}
      // className="border-primaryGreen border-[1px] border-solid w-[26rem] p-[0.75rem] rounded-lg"
      className={`border-primaryGreen border-[1px] border-solid w-[26rem] p-[0.75rem] rounded-lg ${
        IconComponent && "flex flex-row justify-between items-center"
      } ${className}`}
      onTouchStart={onPress}
    >
      <InputField
        placeholder={placeholderTitle}
        keyboardType={keyboardType}
        className="text-xl text-white"
        placeholderTextColor="gray"
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          onChangeText && onChangeText(e.nativeEvent.text); // Call onChangeText with the text value directly
        }}
        value={value}
        autoCapitalize="none"
      />
      {IconComponent && (
        <IconComponent name={iconName} size={24} color="white" />
      )}
    </Input>
  );
};

export default CustomInput;
