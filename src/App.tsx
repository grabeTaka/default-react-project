/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/index'
import Maps from './components/maps/index'
import Informations from './pages/Informations/index'
import Header from './components/header/index'
import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
function App() {
    return (
        <Router>
            <ChakraProvider>
                <Header />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/maps" Component={Maps} />
                    <Route path="/informations" Component={Informations} />
                </Routes>
            </ChakraProvider>
        </Router>
    )
}

export default App
