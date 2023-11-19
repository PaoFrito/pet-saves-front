import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Flex, Box, Image, Text, Input, Stack, Button } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { validateEmail } from "../../utils"
import useUserContext from '../../hooks/useUserContext';
import logo from "../../assets/logo.png"

export const LoginPage = () => {

    const navigate = useNavigate()

    const [emailInvalid, setEmailInvalid] = useState<boolean>(false)
    const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false)
    const [submitBtnLoading, setSubmitBtnLoading] = useState<boolean>(false)
    const [TwitterSubmitBtnLoading, setTwitterSubmitBtnLoading] = useState<boolean>(false)
    const [GoogleSubmitBtnLoading, setGoogleSubmitBtnLoading] = useState<boolean>(false)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const TwitterIcon = <FontAwesomeIcon icon={faX} />
    const GoogleIcon = <FontAwesomeIcon icon={faX} />

    const validatePassword = () => {
        if(password === '' || password.length < 6)
            setPasswordInvalid(true)
        else
            setPasswordInvalid(false)
    }

    const { login } = useUserContext()

    const submit = async () => {
        setSubmitBtnLoading(true)
        setEmailInvalid(!validateEmail(email))
        validatePassword()
        login({credentials: {email: email, password: password}}).then(()=>{
            setSubmitBtnLoading(false)
            navigate("/")
        }).catch((e)=>{
            alert(e)
        })
    }

    return (<>

        <Flex w='100vw' h='100vh' bgColor='#EEEEEE' justify='center' align='center'>
            <main>
                <Flex w='20vw' direction='column' align='center' px='40px' py='20px' bgColor='#5072E8' borderRadius='8px'>
                    <Image src={logo} w='100%' mt='-60%'/>                 
                    <Text w='100%' fontSize='36px' color='#fff' fontWeight='600' textAlign='left'>Bem-vindo</Text>
                    <Stack spacing={3} w='100%' mt='15%'>
                        <Box w='100%'>
                            <Text color='#fff' fontSize='16'>E-mail</Text>
                            <Input 
                                value={email}
                                onChange={(a) => setEmail(a.target.value)}
                                type="email"
                                color='#fff'
                                isInvalid={emailInvalid}
                                focusBorderColor='#000'
                                errorBorderColor='red.300'
                            />
                        </Box>
                        <Box w='100%'>
                            <Text color='#fff' fontSize='16'>Senha</Text>
                            <Input 
                                value={password}
                                onChange={(a) => setPassword(a.target.value)}
                                type="password"
                                color='#fff'
                                placeholder='min. 6 caracteres'
                                _placeholder={{ color: 'gray.400' }}
                                isInvalid={passwordInvalid}
                                focusBorderColor='#000'
                                errorBorderColor='red.500'
                            />
                        </Box>
                        <Button 
                            color='#5072E8'
                            boxShadow='md'
                            isLoading={submitBtnLoading}
                            loadingText='Enviando'
                            onClick={()=>{submit()}}
                        >
                                Entrar
                        </Button>
                    </Stack>
                    <Button
                        w='100%'
                        mt='36px'
                        bgColor='#242C37'
                        color='#FFFFFF'
                        isLoading={TwitterSubmitBtnLoading}
                        loadingText='Enviando'
                        leftIcon={TwitterIcon}
                        onClick={()=>{setTwitterSubmitBtnLoading(true)}}
                    >
                            Entrar com o Twitter
                    </Button>
                    <Button
                        w='100%'
                        mt='16px' 
                        bgColor='#242C37'
                        color='#FFFFFF'
                        isLoading={GoogleSubmitBtnLoading}
                        loadingText='Enviando'
                        leftIcon={GoogleIcon}
                        onClick={()=>{setGoogleSubmitBtnLoading(true)}}
                    >
                            Entrar com o Google
                    </Button>
                </Flex>
            </main>
        </Flex>
    </>)
}