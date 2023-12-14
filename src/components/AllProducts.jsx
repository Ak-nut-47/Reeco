import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import avacado from "../assets/Avocado Hass.jpg";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://640e197b1a18a5db838882f2.mockapi.io/reeco`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box>
      <Table variant="striped" colorScheme="gray">
        <Thead border={"2px solid #b9b9b9"}>
          <Tr>
            <Th></Th>
            <Th>Product Name</Th>
            <Th>Brand</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((el, index) => (
            <Tr key={index}>
              <Td>
                <Image src={avacado} width={"50px"} alt={el.productName} />
              </Td>
              <Td>{el.productName}</Td>
              <Td>{el.brand}</Td>
              <Td>{el.price}</Td>
              <Td>{el.quantity}</Td>
              <Td>
                <Text>{el.price * el.quantity}</Text>
                <Text color={"#898989"}> {"/6 * 1lb"}</Text>
              </Td>
              <Td>
                <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                  <Button border={"1px solid #c9c9c9"}>
                    <FaCheck />
                  </Button>
                  <Button border={"1px solid #c9c9c9"}>
                    <FaTimes />
                  </Button>

                  <Button border={"1px solid #c9c9c9"}>Edit</Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AllProducts;
