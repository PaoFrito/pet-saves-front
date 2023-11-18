import { Flex } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { SideBarItem } from "./SideBarItem"

export const SideBar = () =>{

    const icon1 = <FontAwesomeIcon icon={faCoffee} />

    return(<>
        <Flex w='100%' direction="column">
            <SideBarItem icon={icon1} text="teste"/>
            <SideBarItem icon={icon1} text="teste"/>
            <SideBarItem icon={icon1} text="teste"/>
        </Flex>    
    </>)
}