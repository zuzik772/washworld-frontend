import { Input, InputField } from "@gluestack-ui/themed";

type Props = {
  placeholderTitle: string;
};

const CustomInput = ({ placeholderTitle }: Props) => {
  return (
    <Input
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      className="border-primaryGreen border-[1px] border-solid w-[26rem] p-[0.75rem] rounded-lg"
    >
      <InputField placeholder={placeholderTitle} className="text-xl" />
    </Input>
  );
};

export default CustomInput;
