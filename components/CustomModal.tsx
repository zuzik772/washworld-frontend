import {
  Center,
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
  Text,
  Button,
  Modal,
} from "@gluestack-ui/themed";
import { useState, useRef, useEffect } from "react";

type CustomModalProps = {
  isVisible: boolean;
  changeVisibility: (isVisible: boolean) => void;
  title: string;
  description: string;
  buttons: { title: string; type: "normal" | "danger"; onPress: () => void }[];
};

const CustomModal = ({
  isVisible,
  changeVisibility,
  title,
  description,
  buttons,
}: CustomModalProps) => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible]);
  return (
    <Center>
      <Modal
        isOpen={isVisible}
        onClose={() => {
          changeVisibility(false);
        }}
        finalFocusRef={ref}
        className={`bg-secondaryGray90 h-60 w-[90%] flex justify-center mt-96 border-secondaryGray60 border-[1px] ml-[5%] ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="bg-secondaryGray90  flex flex-row justify-between items-center px-4 border-bottom border-secondaryGray60 border-[1px]">
            <Heading className="text-xl text-white font-bold">{title}</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} width={24} height={24} color="white" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text className="text-white text-lg text-start p-4">
              {description}
            </Text>
          </ModalBody>
          <ModalFooter className="flex flex-row gap-6 justify-end pb-4 pr-6">
            {buttons.map((button) => (
              <Button
                onPress={() => {
                  changeVisibility(false);
                  button.onPress();
                }}
                className={`${
                  button.type === "danger"
                    ? "bg-tertiaryAlert"
                    : "bg-secondaryGray90"
                } p-2 w-32`}
              >
                <ButtonText className="text-white uppercase font-bold text-xl text-center">
                  {button.title}
                </ButtonText>
              </Button>
            ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default CustomModal;
