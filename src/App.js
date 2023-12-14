import logo from './logo.svg';
import './App.css';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Orderbar from './components/Orderbar';
import Summarybar from './components/Summarybar';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="App">
      <Box >
        <Navbar />
        <Orderbar />
        <Flex backgroundColor={"#e9e9e9"} pt={5} gap={5} direction={"column"}>
          <Summarybar />
          <ProductListing />
        </Flex>
      </Box>
    </div >
  );
}

export default App;
