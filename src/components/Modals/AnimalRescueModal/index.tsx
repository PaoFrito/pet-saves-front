import { useDisclosure } from "@chakra-ui/hooks"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Flex, Text, Input, Img } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw} from '@fortawesome/free-solid-svg-icons'
import img from '../../..//assets/img-base.svg' 
import RadioGroup from "../../RadioGroup"
import { SelectSpecies } from "../../../model/Enum/SpeciesEnum"
import useSpecieContext from "../../../hooks/useSpecieContext"

export const AnimalRescueModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { specieState } = useSpecieContext()

    const print = () => {
      console.log(specieState)
    }

    const faPawIcon = <FontAwesomeIcon icon={faPaw} size="2x"/>

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize='24px' color='#5072E8' justifyContent='center'>
              <Flex align='center' gap='24px'>
                {faPawIcon} Registrar animal acolhido
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction='column' gap='16px'>
                <Flex direction='column'>
                  <Text fontSize='16px'>Nome do animal</Text>
                  <Input bgColor='#DFE4F6' focusBorderColor='#5072E8'/>
                </Flex>
                <Flex gap='16px'>
                  <Flex w='50%'>
                    <Input type="file" src={img} h='300px' accept="image/*" aria-hidden="true"/>
                  </Flex>
                  <Flex w='50%' align='flex-start'>
                    <RadioGroup options={SelectSpecies} name="especies"/>
                    <Button variant='outline' mr={3} onClick={print}>print</Button>
                  </Flex>
                </Flex>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button variant='outline' mr={3} onClick={onClose}>Cancelar</Button>
              <Button variant='solid' bg='#5072E8' color='#fff' mr={3} onClick={onClose}>Registrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }