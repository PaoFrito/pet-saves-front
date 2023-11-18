import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SideBar } from './components/SideBar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/teste' element={<SideBar/>}/>
          <Route path='/' element={<div/>}/>
          <Route path='/' element={<div/>}/>
          <Route path='/' element={<div/>}/>
          <Route path='/' element={<div/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)