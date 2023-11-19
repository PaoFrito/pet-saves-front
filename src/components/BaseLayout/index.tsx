import { Alert, AlertIcon, Box, Flex } from "@chakra-ui/react"
import { SideBar } from "../SideBar"
import { Feed } from "../Feed"

export const BaseLayout = () =>{
    const padding = '20px'

    return(
        <Flex w='100dvw' minH='100dvh' overflow="hidden">
            <Box w='30%'>
                <Box position="fixed" w="inherit">
                    <SideBar />
                </Box>
            </Box>
            <Flex w='40%' p={padding} borderLeft='1px' borderRight='1px' borderColor='gray.100' flexDirection="column" overflow="hidden">
                <Feed />
            </Flex>    
            <Box p={padding} w='30%'>
                <Box position="fixed" w="inherit">
                <Alert status='info' borderRadius="15px" w="400px" variant='left-accent' alignItems="flex-start">
                    <AlertIcon />
                    Ajude a manter o projeto! Sua doação é crucial para garantir a continuidade e aprimoramento constante de nossos serviços. Colabore conosco para sustentar iniciativas que beneficiam a comunidade.
                </Alert>
                </Box>
            </Box> 
        </Flex>
    )
}