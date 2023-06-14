import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/index'
import Maps from './components/maps/index'
import Table from './components/table/index'
import Header from './components/header/index'

import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <Router>
      <ChakraProvider>
        <Header/>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/maps' Component={Maps} />
            <Route path='/table' Component={Table} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
