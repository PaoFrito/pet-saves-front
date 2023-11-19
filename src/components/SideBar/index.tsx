import { Box, Flex, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faShieldHeart, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { UserIcon } from "../UserIcon"

export const SideBar = () =>{

    return(
        <Flex flexDir="column" p="14px" pt="70px">
            <Flex gap="18px" flexDir="column" marginLeft="auto" color='#5072E8'>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500">
                    <FontAwesomeIcon icon={faPaw} size="2x"/>
                    <Text>Registrar animal acolhido</Text>
                </Flex>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500">
                    <FontAwesomeIcon icon={faShieldHeart} size="2x"/>
                    <Text>Solicitações de adoção</Text>
                </Flex>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500">
                    <FontAwesomeIcon icon={faCircleExclamation} size="2x"/>
                    <Text>Reportar animal perdido</Text>
                </Flex>
            </Flex>
            <Box>
                <UserIcon/>
            </Box>
        </Flex>  
    )
}