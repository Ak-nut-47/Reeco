import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <Box pl={20} pr={20} bgColor={"#1E633F"}>
      <Flex
        color={"white"}
        p={"15px 0px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        fontFamily={"Poppins"}
      >
        <Flex gap={20} width={"60%"} alignItems={"center"}>
          <Text fontSize={"xl"} fontWeight={"bolder"}>
            Reeco
          </Text>
          <Text>Store</Text>
          <Text>Order</Text>
          <Text>Analytics</Text>
        </Flex>
        <Flex gap={10} justifyContent={"space-evenly"} alignItems={"center"}>
          <Flex fontSize={"xx-large"} position={"relative"}>
            <Box
              transform="scaleX(1)"
              position={"absolute"}
              left={-1}
              top={-2}
              fontSize={"xs"}
              p={0.9}
              borderRadius={"50%"}
              bgColor={"#83E0AD"}
            >
              10
            </Box>
            <Box transform="scaleX(-1)">
              <IoCartOutline />
            </Box>
          </Flex>
          <Flex alignItems={"center"}>
            <Text>Hello, James</Text> <MdKeyboardArrowDown />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
