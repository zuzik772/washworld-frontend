import { Input, InputField } from "@gluestack-ui/themed";

type Props = {
  placeholderTitle: string;
  keyboardType?: any;
  ariaLabel?: string;
};

const CustomInput = ({ placeholderTitle, keyboardType, ariaLabel }: Props) => {
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
      />
    </Input>
  );
};

export default CustomInput;
