import { ReactNode } from 'react';
import { Box, Text } from "@chakra-ui/react"

type Props = {
    icon: ReactNode,
    text: string
}

export const SideBarItem = (props: Props) => {

    return (<>
        <Box 
            color='#5072E8'
            w='100%'
            h='20px'    
        >
            {props.icon}
            <Text fontSize={24}>{props.text}</Text>
        </Box>
    </>)
}