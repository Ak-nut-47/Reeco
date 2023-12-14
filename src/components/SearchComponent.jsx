import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import SearchBar from "./SearchBar";
import { IoPrintOutline } from "react-icons/io5";

const SearchComponent = () => {
  return (
    <Box width={"100%"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <SearchBar />
        <Flex gap={10}>
          <Button
            color={"#1E633F"}
            border={"2px solid #1E633F"}
            borderRadius={"40px"}
          >
            Add Item
          </Button>
          <Flex color={"#1E633F"} style={{ fontSize: "38px" }}>
            <IoPrintOutline />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchComponent;
