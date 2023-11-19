import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Flex, Box, Image, Text, Input, Stack, Button } from "@chakra-ui/react"
import useUserContext from '../../hooks/useUserContext';
import logo from "../../assets/logo.png"

export const LoginPage = () => {
    
    const navigate = useNavigate()
    const { login, userState } = useUserContext()

    

    const [submitBtnLoading, setSubmitBtnLoading] = useState<boolean>(false)

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        if(userState?.id){
            console.log(useState)
            navigate("/");
        }
    }, [])

    const submit = async () => {
        setSubmitBtnLoading(true)
        login({credentials: {username, password}}).then(()=>{
            setSubmitBtnLoading(false)
            navigate("/")
        }).catch((e)=>{
            alert(e)
            setSubmitBtnLoading(false)
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
                            <Text color='#fff' fontSize='16'>Usuário</Text>
                            <Input 
                                value={username}
                                onChange={(a) => setUsername(a.target.value)}
                                color='#fff'
                                focusBorderColor='#e5e5e5'
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
                                _placeholder={{ color: 'gray.400' }}
                                focusBorderColor='#e5e5e5'
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
                        bgColor='#5c708b'
                        color='#FFFFFF'
                        isDisabled={true}
                    >
                            Login com Twitter
                    </Button>
                    <Button
                        w='100%'
                        mt='16px' 
                        bgColor='#5c708b'
                        color='#FFFFFF'
                        isDisabled={true}
                    >
                            Login com Google
                    </Button>
                </Flex>
            </main>
        </Flex>
    </>)
}