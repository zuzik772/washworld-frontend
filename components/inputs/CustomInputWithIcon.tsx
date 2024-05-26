import {
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@gluestack-ui/themed";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

type Props = {
  placeholderTitle: string;
  icon: any;
  ariaLabel?: string;
  onChangeText?: (text: string) => void;
  value: string;
};

const CustomInputWithIcon = ({
  placeholderTitle,
  icon,
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
      className="border-primaryGreen border-[1px] border-solid w-[26rem] rounded-lg pl-[0.75rem] flex flex-row justify-between items-center"
    >
      <InputField
        placeholder={placeholderTitle}
        type="password"
        className="text-xl w-[20.5rem] text-white"
        placeholderTextColor="gray"
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          onChangeText && onChangeText(e.nativeEvent.text); // Call onChangeText with the text value directly
        }}
        value={value}
        autoCapitalize="none"
      />
      <InputSlot className="bg-primaryGreen p-[0.75rem] rounded-r-md">
        <Icon
          as={icon}
          width={24}
          height={24}
          color="white"
          fill={"$colors$primaryGreen"}
        />
      </InputSlot>
    </Input>
  );
};

export default CustomInputWithIcon;
