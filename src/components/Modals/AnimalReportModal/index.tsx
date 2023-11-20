import { useForm } from "react-hook-form"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Flex, Text, Input, Img } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import img from '../../..//assets/img-base.svg'
import RadioGroup from "../../RadioGroup"
import Dropzone from 'react-dropzone'
import { SelectSpecies } from "../../../model/Enum/SpeciesEnum"


type FormData = {
  name: string
  img: string
  specie: string
  size: 'sm' | 'md '| 'lg'
  ate: number
  feed: boolean
  feedText: string
}

const AnimalRescueModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

  const { register, getValues, setValue } = useForm<FormData>({
    defaultValues:{
      name : '',
      img: '',
      specie: '',
      size: 'sm',
      ate: 0,
      feed: false,
      feedText: 'string'
    }
  })

  const faPawIcon = <FontAwesomeIcon icon={faPaw} size="2x" />

  return (
    <>
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
                <Input value={getValues("name")} onChange={(a) => setValue('name', a.target.value)} bgColor='#DFE4F6' focusBorderColor='#5072E8' />
              </Flex>
              <Flex gap='16px'>
                <Flex w='50%'>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                  {({getRootProps, getInputProps}) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
                </Flex>
                <Flex w='50%' align='flex-start'>
                  <RadioGroup options={SelectSpecies} name="especies" onChange={(x:string)=>setValue('specie', x)}/>
                  <Button variant='outline' mr={3} onClick={print}>print</Button>
                </Flex>
              </Flex>
              <Flex>

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

export default AnimalRescueModal