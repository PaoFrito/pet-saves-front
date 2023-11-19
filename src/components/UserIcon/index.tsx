import useUserContext from "../../hooks/useUserContext"
import { Img, Flex, Box, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

export const UserIcon = () =>{

    const Icon = <FontAwesomeIcon icon={faEllipsis} size="2x"/>

    const { userState } = useUserContext()

    return(<>
        <Flex w='100%' mt='20%' justify='flex-end'>
            <Flex w='60%' direction='row' align='center' justify='space-between' gap='16px'>
                <Box w='70px' h='70px' borderRadius='100%' borderWidth='2px' borderColor='#5072E8'>
                    <Img src={userState.img} borderRadius='100%'/>
                </Box>
                <Text fontSize='22px' flexGrow='1' textAlign='left'>{userState.name}</Text>
                <Flex justify='center' onClick={()=>{}} cursor='pointer'>
                    {Icon}
                </Flex>
            </Flex>
        </Flex>
    </>)
}