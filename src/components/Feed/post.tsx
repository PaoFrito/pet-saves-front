import { Avatar, Flex, Img, Text } from "@chakra-ui/react"
import moment from "moment";

interface PostProps{
    createdAt: number;
    authorUrl: string;
    authorName: string;
    animalName: string;
    animalSize: string;
    animalType: string;
    animalAge?: number;
    animalId: string;
    description?: string;
    imageUrl: string;
}

export const Post = ({createdAt, authorUrl, authorName, animalName, animalSize, animalType, animalAge, animalId, description, imageUrl}: PostProps) =>{
    const getDays = (unix: number) => {
        const date = moment.unix(unix)
        const now = moment()
        const minutes = now.diff(date, 'minutes');
        const hours = now.diff(date, 'hours');
        const days = now.diff(date, 'days');

        if(minutes < 1) return 'Agora'
        if(hours < 1) return now.diff(date,'minutes') + 'm'
        if(days < 1) return now.diff(date,'hours') + 'h'
        return days + 'd'
    }

    const translateSize = (size: string) => {
        switch (size) {
            case 'small':
                return 'Pequeno'
            case 'medium':
                return ''
            case 'big':
                return 'Grande'
            default:
                break;
        }
    }

    const translateType = (type: string) => {
        switch (type) {
            case 'cat':
                return 'Gato'
            case 'dog':
                return 'Cachorro'
            default:
                break;
        }
    }
    return(
        <Flex flexDir="column" w='100%' px="22px" gap="6px" >
            <Flex justifyContent="space-between">
                <Flex alignItems="center" gap="8px">
                    <Avatar src={authorUrl} name={authorName} size="md" borderWidth='2px' borderColor='#5072E8'/>
                    <Flex flexDir="column">
                        <Flex alignItems="center" gap="6px">
                            <Text fontSize='16px' color='#5072E8' fontWeight="600">
                                {authorName || 'Desconhecido'}
                            </Text>
                            <Text fontSize="14px" color="#585858">
                            • {getDays(createdAt)}
                            </Text>
                        </Flex>
                        <Text fontWeight="400" fontSize="14px">Protetor</Text>
                    </Flex>
                </Flex>
                <Flex flexDir="column" textAlign="right">
                    <Text fontSize="16px" fontWeight="500">{translateSize(animalSize)} {translateType(animalType)} {animalName}</Text>
                    <Flex fontSize="14px" gap="6px" marginLeft="auto">
                        <Text>{animalAge ? `${animalAge} semanas de idade •` : ''} </Text>
                        <Text color="#5072E8" fontWeight="500" cursor="pointer" textAlign="right">Solicitar Adoção</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Img w="100%" h="428px" borderRadius="4px" src={imageUrl}/>
            <Flex flexDir="column">
                <Flex>
                    <Text fontSize="15px"><Text as="b" fontWeight="600" fontSize="16px" mr="5px">{authorName}</Text>{description}</Text>
                </Flex>
            </Flex>
        </Flex>  
    )
}