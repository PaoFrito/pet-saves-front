import { ReactNode } from "react"
import { Grid, GridItem, Text } from "@chakra-ui/react"


type SideBarItemProps = {
    text: string
    icon: ReactNode
}

export const SideBarItem = (props: SideBarItemProps) =>{

    const colIcon = 5
    const colTextStart = 6
    const colTextEnd = 11

    const SBText = ({ text }: { text: string }) => {
        return(
            <Text fontSize='24'>{text}</Text>
        )
    }

    return(<>
        <Grid w='100%' templateColumns={`repeat(10, 10%)`} color='#5072E8' cursor='pointer'>
            <GridItem colStart={colIcon} colSpan={1} alignSelf='center'>
                {props.icon}
            </GridItem>
            <GridItem colStart={colTextStart} colEnd={colTextEnd}>
                <SBText text={props.text}/>
            </GridItem>
        </Grid>    
    </>)
}