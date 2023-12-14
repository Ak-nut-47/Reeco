import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Orderbar from './components/Orderbar';

function App() {
  return (
    <div className="App">
      <Box >
        <Navbar />
        <Orderbar />
      </Box>
    </div>
  );
}

export default App;
