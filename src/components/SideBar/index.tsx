import { Grid, GridItem } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faShieldHeart, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { SideBarItem } from "./SideBarItem"
import { UserIcon } from "../UserIcon"

export const SideBar = () =>{

    const faPawIcon = <FontAwesomeIcon icon={faPaw} size="2x"/>
    const faShieldHeartIcon = <FontAwesomeIcon icon={faShieldHeart} size="2x"/>
    const faCircleExclamationIcon = <FontAwesomeIcon icon={faCircleExclamation} size="2x"/>

    return(<>
        <Grid mt='10vh' w='100%' rowGap='16px' color='#5072E8'>
            <GridItem onClick={()=>{}}>
                <SideBarItem icon={faPawIcon} text="Registrar animal acolhido"/>
            </GridItem>
            <GridItem onClick={()=>{}}>
                <SideBarItem icon={faShieldHeartIcon} text="Solicitações de adoção"/>
            </GridItem>
            <GridItem onClick={()=>{}}>
                <SideBarItem icon={faCircleExclamationIcon} text="Reportar animal perdido"/>
            </GridItem>
            <UserIcon/>
        </Grid>    
    </>)
}