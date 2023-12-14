import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SearchComponent from "./SearchComponent";
import AllProducts from "./AllProducts";

const ProductListing = () => {
  return (
    <Box Box pl={20} pr={20}>
      <Flex
        border={"2px solid #b9b9b9"}
        borderRadius={"10px"}
        p={"15px 15px"}
        bgColor={"white"}
        direction={"column"}
      >
        <SearchComponent />
        <AllProducts />
      </Flex>
    </Box>
  );
};

export default ProductListing;
