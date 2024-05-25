import { Input, InputField } from "@gluestack-ui/themed";

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
};

const CustomInput = ({
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
      isReadOnly={isReadOnly}
      aria-label={ariaLabel || placeholderTitle}
      className={`border-primaryGreen border-[1px] border-solid w-[26rem] p-[0.75rem] rounded-lg ${className} flex flex-row justify-between items-center`}
      onTouchStart={onPress}
    >
      <InputField
        value={value}
        placeholder={placeholderTitle}
        keyboardType={keyboardType}
        className="text-xl text-white"
        placeholderTextColor="gray"
      />
      {IconComponent && (
        <IconComponent name={iconName} size={24} color="white" />
      )}
    </Input>
  );
};

export default CustomInput;
