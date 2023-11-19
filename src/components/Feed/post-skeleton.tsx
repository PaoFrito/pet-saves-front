import { Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react"

export const PostSkeleton = () =>{
    return(
        <Flex flexDir="column" w='100%' px="22px" gap="14px" >
            <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" gap="8px">
                    <SkeletonCircle size='12' />
                    <Flex flexDir="column" gap="10px">
                        <Skeleton h='12px' w="150px"/>
                        <Skeleton h='12px' w="100px"/>
                    </Flex>
                </Flex>
                <Flex flexDir="column" textAlign="right" gap="8px">
                    <Skeleton h='12px' w="150px" ml="auto"/>
                    <Skeleton h='12px' w="200px" ml="auto"/>
                </Flex>
            </Flex>
            <Skeleton w="100%" h="428px" borderRadius="4px"/>
            <Flex flexDir="column" gap="10px">
                <Skeleton h='12px' w="100%" />
                <Skeleton h='12px' w="100%" />
                <Skeleton h='12px' w="100%" />
            </Flex>
        </Flex>  
    )
}