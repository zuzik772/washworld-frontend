import { Input, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed";

type Props = {
  placeholderTitle: string;
  icon: any;
};

const CustomInputWithIcon = ({ placeholderTitle, icon }: Props) => {
  return (
    <Input
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      className="border-primaryGreen border-[1px] border-solid w-[26rem] rounded-lg pl-[0.75rem] flex flex-row justify-between items-center"
    >
      <InputField
        placeholder={placeholderTitle}
        className="text-xl w-[20.5rem]"
      />
      <InputSlot className="bg-primaryGreen p-[0.75rem] rounded-r-md">
        <InputIcon
          width={24}
          height={24}
          as={icon}
          color="white"
          fill="$colors$primaryGreen"
        ></InputIcon>
      </InputSlot>
    </Input>
  );
};

export default CustomInputWithIcon;