import { Input, InputField } from "@gluestack-ui/themed";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

type Props = {
  placeholderTitle: string;
  keyboardType?: any;
  ariaLabel?: string;
  onChangeText?: (text: string) => void;
  value: string;
};

const CustomInput = ({
  placeholderTitle,
  keyboardType,
  ariaLabel,
  onChangeText,
  value,
}: Props) => {
  return (
    <Input
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      isRequired={true}
      aria-label={ariaLabel || placeholderTitle}
      className="border-primaryGreen border-[1px] border-solid w-[26rem] p-[0.75rem] rounded-lg"
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
    </Input>
  );
};

export default CustomInput;
