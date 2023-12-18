import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import avacado from "../assets/Avocado Hass.jpg";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  IconButton,
  Input,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { highlightReasonAction, updateQuantityAction } from "../Redux/action";
import { useSelector } from "react-redux";

const EditQuantityModal = ({
  productName,
  id,
  dispatch,
  price,
  quantity,
  brand,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [editedQuantity, setEditedQuantity] = useState(quantity);
  const highlightedReasons = useSelector((state) => state.highlightedReasons);

  const handleQuantityChange = (newQuantity) => {
    setEditedQuantity(newQuantity);
  };

  const totalPrice = price * editedQuantity;
  const finalApproval = useSelector((store) => store.isApproved);

  const handleReasonClick = (reason) => {
    dispatch(highlightReasonAction(id, reason));
  };

  const isHighlighted = (reason) => highlightedReasons[id] === reason;

  return (
    <>
      <Button
        onClick={finalApproval ? null : onOpen}
        border={"1px solid #c9c9c9"}
        color=""
        cursor={finalApproval ? "not-allowed" : "pointer"}
        disabled={finalApproval}
      >
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4} fontWeight="bold">
              Editing quantity for <b>{productName}</b>
            </Text>
            <Text mb={4} color={"#898989"} fontWeight="bold">
              {brand}
            </Text>
            <Flex justifyContent={"space-between"}>
              <Flex>
                <Image src={avacado} width={100} />
              </Flex>
              <Flex direction="column" alignItems="center">
                <Flex>
                  <Text mt={2} fontWeight="bold">
                    Price:
                  </Text>
                  <Input
                    value={`$${price}`}
                    isReadOnly
                    textAlign="center"
                    fontWeight="bold"
                    maxW={100}
                  />
                </Flex>
                <Flex alignItems="center" mt={2}>
                  <Text fontWeight="bold">Quantity:</Text>
                  <IconButton
                    color={"green"}
                    icon={<FaMinusCircle />}
                    onClick={() => handleQuantityChange(editedQuantity - 1)}
                  />
                  <Input
                    value={editedQuantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    textAlign="center"
                    fontWeight="bold"
                    maxW={100}
                  />
                  <IconButton
                    color={"green"}
                    icon={<FaPlusCircle />}
                    onClick={() => handleQuantityChange(editedQuantity + 1)}
                  />
                </Flex>
                <Text mt={2} fontWeight="bold">
                  Total Price: ${totalPrice}
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={3}>
              <Flex>
                <b>Choose Reason </b>
                <Text>(Optional) </Text>
              </Flex>
              <Flex gap={5}>
                <Button
                  size={"sm"}
                  fontSize={"10"}
                  borderRadius={"40px"}
                  onClick={() => handleReasonClick("Missing Product")}
                  variant={
                    isHighlighted("Missing Product") ? "solid" : "outline"
                  }
                >
                  Missing Product
                </Button>
                <Button
                  size={"sm"}
                  fontSize={"10"}
                  borderRadius={"40px"}
                  onClick={() => handleReasonClick("Quantity is not the same")}
                  variant={
                    isHighlighted("Quantity is not the same")
                      ? "solid"
                      : "outline"
                  }
                >
                  Quantity is not the same
                </Button>
                <Button
                  size={"sm"}
                  fontSize={"10"}
                  borderRadius={"40px"}
                  onClick={() => handleReasonClick("Price is not the same")}
                  variant={
                    isHighlighted("Price is not the same") ? "solid" : "outline"
                  }
                >
                  Price is not the same
                </Button>
                <Button
                  size={"sm"}
                  fontSize={"10"}
                  borderRadius={"40px"}
                  onClick={() => handleReasonClick("Other")}
                  variant={isHighlighted("Other") ? "solid" : "outline"}
                >
                  Other
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={() => {
                onClose();

                dispatch(updateQuantityAction(id, editedQuantity));
              }}
            >
              Save
            </Button>
            <Button colorScheme="gray" ml={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditQuantityModal;
