import { Input, InputField } from "@gluestack-ui/themed";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

type Props = {
  placeholderTitle: string;
  keyboardType?: any;
  ariaLabel?: string;
  onChangeText?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

const CustomInput = ({
  placeholderTitle,
  keyboardType,
  ariaLabel,
  onChangeText,
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
        onChange={onChangeText}
      />
    </Input>
  );
};

export default CustomInput;
