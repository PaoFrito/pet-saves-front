import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './components/BaseLayout'
import { LoginPage } from './pages/Login'
import { UserContextProvider } from './context/UserContext'
import './style/base.css'

import axios from 'axios';
import useUserContext from './hooks/useUserContext'

axios.interceptors.response.use(
  response => response,
  error => {
    const { userState } = useUserContext();
    console.log(userState)
    console.log('userState')
    if (error.response?.status === 401) {
      localStorage.removeItem('user')
      window.location.replace('/login');
    }
    return Promise.reject(error);
  }
);

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

