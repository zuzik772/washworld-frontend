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
import { useState, useRef } from "react";

const CustomModal = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const ref = useRef(null);
  return (
    <Center className="h-full flex items-center justify-center">
      <Button
        onPress={() => setShowModal(true)}
        ref={ref}
        className="bg-tertiaryAlert p-4 w-60"
      >
        <ButtonText className="text-white uppercase font-bold text-xl text-center">
          Emergency Stop
        </ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
        className="bg-secondaryGray90 h-60 w-[90%] flex justify-center mt-96 border-secondaryGray60 border-[1px] ml-[5%]"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="bg-secondaryGray90  flex flex-row justify-between items-center px-4 border-bottom border-secondaryGray60 border-[1px]">
            <Heading className="text-xl text-white font-bold">
              Emergency Stop
            </Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} width={24} height={24} color="white" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text className="text-white text-lg text-start p-4">
              Are you sure you want to stop the wash?
            </Text>
          </ModalBody>
          <ModalFooter className="flex flex-row gap-6 justify-end pb-4 pr-6">
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              className="bg-secondaryGray90 p-2 w-24 border-[1px] border-secondaryGray60"
            >
              <ButtonText className="text-white text-xl text-center">
                Cancel
              </ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              className="bg-tertiaryAlert p-2 w-24"
            >
              <ButtonText className="text-white uppercase font-bold text-xl text-center">
                Stop
              </ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default CustomModal;
