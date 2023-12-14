import React from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Flex align="center" p={4}>
      <InputGroup width="100%">
        <Input
          placeholder="Search..."
          variant="outline"
          border={"1px solid #b9b9b9"}
          borderRadius={"40px"}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            variant="ghost"
            fontSize="20px"
            color="gray.500"
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
