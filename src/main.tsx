import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './components/BaseLayout'
import { LoginPage } from './pages/Login'
import { UserContextProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<BaseLayout/>}/>
              <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)