import { Box, Flex } from "@chakra-ui/react"
import { BaseLayout }  from "../../components/BaseLayout"

export const HomePage = () =>{
    const padding = '20px'

    return(
        <Flex w='100dvw' minH='100dvh' overflow="hidden">
            <Box w='30%'>
                <Box position="fixed" w="inherit">
                    <SideBar />
                </Box>
            </Box>
            <Flex w='40%' p={padding} borderLeft='1px' borderRight='1px' borderColor='gray.100' flexDirection="column" overflow="hidden">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>aaaaaaaaaaaaa
            </Flex>    
            <Box p={padding} w='30%'>
                <Box position="fixed" w="inherit">
                bbbbbb
                </Box>
            </Box> 
        </Flex>
    )
}