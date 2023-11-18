import { Box, Flex } from "@chakra-ui/react"
import { SideBar } from "../SideBar"

export const BaseLayout = () =>{
    let padding = 20

    return(
        <Flex w='100vw' minH='100vh' direction='row'>
            <Box p={padding} w='30%'>
                <header>
                    <SideBar/>
                </header>
            </Box>    
            <Box w='40%' p={padding} borderLeft='1px' borderRight='1px' borderColor='gray.100'>
                <main>
                    
                </main>
            </Box>    
            <Box p={padding} w='30%'>
                b
            </Box>    
        </Flex>
    )
}