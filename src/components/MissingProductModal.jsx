import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { markMissingAction, markMissingUrgent } from "../Redux/action";
const MissingProductModal = ({ productName, id, dispatch, approved }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        border={"1px solid #c9c9c9"}
        color={
          approved === true
            ? ""
            : approved === "missing"
            ? "orange"
            : approved === "missingurgent"
            ? "red"
            : null
        }
      >
        <FaTimes />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Missing Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              IS <b>{productName}</b> Important?
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                onClose();
                dispatch(markMissingAction(id));
              }}
            >
              No
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onClose();
                dispatch(markMissingUrgent(id));
              }}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MissingProductModal;
