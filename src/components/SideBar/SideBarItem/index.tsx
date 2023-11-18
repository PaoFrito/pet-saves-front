import { ReactNode } from 'react';
import { Flex, Spacer, Text } from "@chakra-ui/react"

type Props = {
    icon: ReactNode,
    text: string
}

export const SideBarItem = (props: Props) => {

    return (<>
        <Flex w='100%' h='20px' m='16px' color='#5072E8' direction='row' align='center' justify='right'>
            {props.icon}
            <Text ml='8px' fontSize={24}>{props.text}</Text>
        </Flex>
    </>)
}