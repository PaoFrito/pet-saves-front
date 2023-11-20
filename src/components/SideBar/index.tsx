import { useDisclosure } from "@chakra-ui/hooks"
import { Avatar, Flex, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faShieldHeart, faCircleExclamation, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import useUserContext from "../../hooks/useUserContext"
import AnimalRescueModal from "../Modals/AnimalRescueModal"
import AnimalRequestModal from "../Modals/AnimalRequestModal"
import AnimalReportModal from "../Modals/AnimalReportModal"

export const SideBar = () =>{
    const { userState } = useUserContext()

    const rescueShelteredModal = useDisclosure()
    const requestShelteredModal = useDisclosure()
    const reportShelteredModal = useDisclosure()

    return(
        <Flex flexDir="column" p="24px" pt="70px" marginLeft="auto" maxW="350px">
            <Flex gap="4px" flexDir="column" color='#5072E8'>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500" borderRadius="15px" p="8px 14px" _hover={{backgroundColor: '#5072E83B'}} onClick={rescueShelteredModal.onOpen}>
                    <FontAwesomeIcon icon={faPaw} size="2x"/>
                    <Text>Registrar animal acolhido</Text>
                    <AnimalRescueModal isOpen={rescueShelteredModal.isOpen} onClose={rescueShelteredModal.onClose}/>
                </Flex>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500" borderRadius="15px" p="8px 14px" _hover={{backgroundColor: '#5072E83B'}}>
                    <FontAwesomeIcon icon={faShieldHeart} size="2x"/>
                    <Text>Solicitações de adoção</Text>
                    <AnimalRequestModal isOpen={requestShelteredModal.isOpen} onClose={requestShelteredModal.onClose}/>
                </Flex>
                <Flex alignItems="center" gap="14px" cursor='pointer' fontWeight="500" borderRadius="15px" p="8px 14px" _hover={{backgroundColor: '#5072E83B'}}>
                    <FontAwesomeIcon icon={faCircleExclamation} size="2x"/>
                    <Text>Reportar animal perdido</Text>
                    <AnimalReportModal isOpen={reportShelteredModal.isOpen} onClose={reportShelteredModal.onClose}/>
                </Flex>
            </Flex>
            <Flex cursor='pointer' mt="64px" alignItems="center" justifyContent="space-between" borderRadius="15px" p="8px 14px" _hover={{backgroundColor: '#5072E83B'}}>
                <Flex alignItems="center" gap="14px">
                    <Avatar src={userState.img} name={userState.name} size="md" borderWidth='2px' borderColor='#5072E8'/>
                    <Text fontSize='18px' color='#5072E8' fontWeight="600">
                        {userState.name || 'Desconhecido'}
                    </Text>
                </Flex>
                <FontAwesomeIcon icon={faEllipsis} size="2x" color='#505050'/>
            </Flex>
        </Flex>  
    )
}