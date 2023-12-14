import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { BsSnow3 } from "react-icons/bs";
import { LuMilk } from "react-icons/lu";
import { LuSoup } from "react-icons/lu";
import { FaCarRear } from "react-icons/fa6";
import { FaTrashArrowUp } from "react-icons/fa6";
import { IoArrowUndoCircleOutline } from "react-icons/io5";

const Summarybar = () => {
  const color = "#a9a9a9 ";
  return (
    <Box pl={20} pr={20}>
      <Flex
        justifyContent={"space-between"}
        border={"2px solid #b9b9b9"}
        borderRadius={"10px"}
        p={"15px 15px"}
        bgColor={"white"}
      >
        <Flex p={2} direction={"column"} alignItems={"flex-start"} pl={10}>
          <Text color={color}>Supplier</Text>
          <Text>
            <b>
              {" "}
              East Coast Fruits <br />& Vegetables
            </b>
          </Text>
        </Flex>
        <Flex
          borderLeft={"2px solid #b9b9b9"}
          p={2}
          direction={"column"}
          alignItems={"flex-start"}
          pl={10}
        >
          <Text color={color}>Shipping Date</Text>
          <b>
            <Text>Thu, Feb 10</Text>
          </b>
        </Flex>
        <Flex
          borderLeft={"2px solid #b9b9b9"}
          p={2}
          direction={"column"}
          alignItems={"flex-start"}
          pl={10}
        >
          <Text color={color}>Total</Text>
          <Text>
            <b>$ 15,028.3</b>
          </Text>
        </Flex>
        <Flex
          borderLeft={"2px solid #b9b9b9"}
          p={2}
          direction={"column"}
          justifyContent={"space-between"}
          pl={10}
        >
          <Text color={color}>Category</Text>

          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            <BsSnow3 />
            <LuMilk />
            <LuSoup />
            <FaCarRear />
            <FaTrashArrowUp />
            <IoArrowUndoCircleOutline />
          </Grid>
        </Flex>
        <Flex
          borderLeft={"2px solid #b9b9b9"}
          p={2}
          direction={"column"}
          pl={10}
        >
          <Text color={color}>Department</Text>
          <Text>
            <b>300-444-678</b>
          </Text>
        </Flex>
        <Flex
          p={2}
          direction={"column"}
          borderLeft={"2px solid #b9b9b9"}
          alignItems={"flex-start"}
          pl={10}
        >
          <Text color={color}>Status</Text>
          <Text>
            <b>Awaiting Your</b>
          </Text>
          <Text>
            <b>approval</b>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Summarybar;
