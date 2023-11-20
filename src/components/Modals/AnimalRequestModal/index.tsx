import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Flex, Text, Img, Avatar, Divider } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import axios from "axios"
import sadpug from '../../../assets/sadpug.webp'
import { AnimalsToRequest } from '../../../model/AnimalsToRequest'

const AnimalReqestModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

  const shieldHeartIcon = <FontAwesomeIcon icon={faShieldHeart} size="2x" />

  const [animalList, setAnimalList] = useState<AnimalsToRequest[]>([])

  const fetchAnimalListData = () => {
    // axios.get(`${import.meta.env.VITE_BASE_API_URL}/v1/animal/`).then((res) => {
    //   console.log(res.data)
    //   setAnimalList(res.data)
    // })
  }

  useEffect(() => {
    fetchAnimalListData();
    setAnimalList([
      {
        animal: {
          id: 1,
          name: 'Rex',
          imageUrl: sadpug
        },
        requesters: [
          {
            id: 1,
            imageUrl: sadpug
          },
          {
            id: 2,
            imageUrl: sadpug
          }
        ]
      },
      {
        animal: {
          id: 1,
          name: 'Rex',
          imageUrl: sadpug
        },
        requesters: [
          {
            id: 1,
            imageUrl: sadpug
          },
          {
            id: 2,
            imageUrl: sadpug
          }
        ]
      },
      {
        animal: {
          id: 1,
          name: 'Rex',
          imageUrl: sadpug
        },
        requesters: [
          {
            id: 1,
            imageUrl: sadpug
          },
          {
            id: 2,
            imageUrl: sadpug
          }
        ]
      }
    ])
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='xl' scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent maxW='800px'>
          <ModalHeader fontSize='24px' color='#5072E8' justifyContent='center'>
            <Flex align='center' gap='24px'>
              {shieldHeartIcon} Solicitações adoção
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {animalList.map((animal: any) => (
              <>
                <Flex direction='row' gap='16px' padding='16px'>
                  <Flex direction='column' w='40%' gap='8px'>
                    <Text fontSize='16px' color='#5072E8'>{animal.animal.name}</Text>
                    <Img src={animal.animal.imageUrl} h='200px' borderRadius='12px'/>
                  </Flex>
                  <Flex direction='column' w='60%' gap='8px'>
                    <Text fontSize='16px' color='#5072E8'>Pessoas interessadas</Text>
                    <Flex direction='row' gap='8px' wrap='wrap'>
                      {animal.requesters.map((requester: any) => (
                        <Avatar src={requester.imageUrl} w='50px' h='50px'/>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
                <Divider />
              </>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button variant='outline' mr={3} onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AnimalReqestModal