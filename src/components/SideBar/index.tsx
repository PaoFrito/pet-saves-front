import { Avatar, Flex, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faShieldHeart, faCircleExclamation, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import useUserContext from "../../hooks/useUserContext"

export const SideBar = () =>{
    const { userState } = useUserContext()
    return(
        <Flex flexDir="column" p="24px" pt="70px" marginLeft="auto" maxW="350px">
            <Flex gap="4px" flexDir="column" color='#5072E8'>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500" borderRadius="15px" p="8px 14px" _hover={{backgroundColor: '#5072E83B'}}>
                    <FontAwesomeIcon icon={faPaw} size="2x"/>
                    <Text>Registrar animal acolhido</Text>
                </Flex>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500" borderRadius="15px" p="8px 14px" _hover={{backgroundColor: '#5072E83B'}}>
                    <FontAwesomeIcon icon={faShieldHeart} size="2x"/>
                    <Text>Solicitações de adoção</Text>
                </Flex>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500" borderRadius="15px" p="8px 14px" _hover={{backgroundColor: '#5072E83B'}}>
                    <FontAwesomeIcon icon={faCircleExclamation} size="2x"/>
                    <Text>Reportar animal perdido</Text>
                </Flex>
            </Flex>
            <Flex cursor='pointer' mt="64px" alignItems="center" justifyContent="space-between" borderRadius="15px" p="8px 14px" _hover={{backgroundColor: '#5072E83B'}}>
                <Flex alignItems="center" gap="14px">
                    <Avatar src={userState.imageUrl} name={userState.username} size="md" borderWidth='2px' borderColor='#5072E8'/>
                    <Text fontSize='18px' color='#5072E8' fontWeight="600">
                        {userState.username || 'Desconhecido'}
                    </Text>
                </Flex>
                <FontAwesomeIcon icon={faEllipsis} size="2x" color='#505050'/>
            </Flex>
        </Flex>  
    )
}