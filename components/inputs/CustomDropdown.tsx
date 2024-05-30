import {
  View,
  Text,
  Pressable,
  onChange,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import CustomInput from "./CustomInput";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";

type Props = {
  placeholderTitle: string;
  items: string[];
  onChange?: (value: string) => void;
};

const CustomDropdown = ({ placeholderTitle, items, onChange }: Props) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <View className="relative">
      <CustomInput
        className="pointer-events-none -z-10"
        isReadOnly={true}
        placeholderTitle={placeholderTitle}
        aria-label={placeholderTitle}
        value={selectedItem}
        onPress={() => {
          setMenuExpanded(!menuExpanded);
        }}
        icon={[
          Entypo as React.ComponentType<{
            name: string;
            size: number;
            color: string;
          }>,
          "chevron-down",
        ]}
      />
      {menuExpanded && (
        <View className="top-[47px] absolute border-primaryGreen border-[1px] rounded-lg w-[26rem] overflow-hidden">
          {items.map((item, index) => (
            <View className="relative" key={index}>
              <Pressable
                onPress={() => {
                  if (onChange) {
                    onChange(item);
                    setSelectedItem(item);
                    setMenuExpanded(false);
                  }
                }}
                className="p-2 w-full"
              >
                <Text className="text-xl text-white">{item}</Text>
              </Pressable>
              <View
                className={`absolute -z-10 h-full w-full opacity-75 ${
                  item === selectedItem && "bg-primaryGreen"
                }`}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;
