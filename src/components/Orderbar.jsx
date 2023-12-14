import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
const Orderbar = () => {
  return (
    <Box pl={20} pr={20} boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.1)"}>
      <Flex p={"5px 0px"} h={20}>
        <Flex
          direction={"column"}
          justifyContent={"space-around"}
          width={"100%"}
        >
          <Flex gap={2} alignItems={"center"} color={"#808080"}>
            Order <MdArrowForwardIos /> <u>Order 32457ABC</u>{" "}
          </Flex>
          <Flex>
            <Text fontWeight={"bolder"} fontSize={"x-large"}>
              Order 32457ABC
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems={"end"}>
          <Flex gap={7}>
            <Button
              border={"1px solid #1e633f"}
              color={"#1e633f"}
              borderRadius={"50px"}
            >
              Back
            </Button>
            <Button bgColor={"#1E633F"} color={"white"} borderRadius={"50px"}>
              Approve Order
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Orderbar;
