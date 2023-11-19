import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './components/BaseLayout'
import { AnimalRescueModal } from './components/Modals/AnimalRescueModal'
import { LoginPage } from './pages/Login'
import { UserContextProvider } from './context/UserContext'
import './style/base.css'
import { SpecieContextProvider } from './context/SpecieContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<BaseLayout/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/modal' element={
                <SpecieContextProvider>
                  <AnimalRescueModal/>
                </SpecieContextProvider>
              }/>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)