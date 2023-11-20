import { useForm } from "react-hook-form"
import { Textarea, InputGroup, InputRightAddon, Alert, AlertIcon, AlertTitle, AlertDescription, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Flex, Text, Input } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import RadioGroup from "../../RadioGroup"
import { SelectSpecies } from "../../../model/Enum/SpeciesEnum"
import { useState } from "react"

enum Size {
  sm = 'Pequeno',
  md = 'Medio',
  lg = 'Grande'
}

const sizeOptions = [{ label: Size.sm, icon: undefined },
{ label: Size.md, icon: undefined },
{ label: Size.lg, icon: undefined }]

const isToFeed = [{ label: 'Criar publicação', icon: undefined },
{ label: 'Não criar publicação', icon: undefined }]

type FormData = {
  name: string
  img: string
  specie: string
  size: Size
  age: number
  feed: boolean
  feedText: string
}

const AnimalReportModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [alert] = useState(false)

  const { watch, setValue } = useForm<FormData>({
    defaultValues: {
      feed: true,
    }
  })

  const faPawIcon = <FontAwesomeIcon icon={faPaw} size="2x" />

  return (
    <>
      {
        alert ?
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>file error</AlertTitle>
            <AlertDescription>file is not a img.</AlertDescription>
          </Alert>
          : null
      }

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
                <Input value={watch("name")} onChange={(a) => setValue('name', a.target.value)} bgColor='#DFE4F6' focusBorderColor='#5072E8' />
              </Flex>
              <Flex gap='16px'>
                <Flex w='50%'>
                  {/* <Dropzone onDrop={file => validadeFile(file)}>
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                      </section>
                    )}
                  </Dropzone> */}
                </Flex>
                <Flex w='50%' align='flex-start' direction='column' gap='16px'>
                  <Flex w='100%' direction='column' gap='8px'>
                    <Text color='#5072E8' fontWeight='600'>Espécie</Text>
                    <RadioGroup options={SelectSpecies} name="especies" onChange={(x: string) => setValue('specie', x)} />
                  </Flex>
                  <Flex direction='column' gap='8px'>
                    <Text color='#5072E8' fontWeight='600'>Tamanho</Text>
                    <RadioGroup options={sizeOptions} name="tamanho" onChange={(x: any) => setValue('size', x)} />
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap='16px'>
                <Flex w='50%' align='flex-start' direction='column'>
                  <Text color='#5072E8' fontWeight='600'>Publicação no feed</Text>
                  <RadioGroup options={isToFeed} name="para o feed?" onChange={(x: any) => { setValue('feed', x === 'Criar publicação') }} />
                </Flex>
                <Flex w='50%' align='flex-start' direction='column'>
                  <Text color='#5072E8' fontWeight='600'>Idade estimada</Text>
                  <InputGroup>
                    <Input type='number' value={watch('age')} onChange={(a) => { setValue('age', parseInt(a.target.value)) }} />
                    <InputRightAddon children='Semanas' />
                  </InputGroup>
                </Flex>
              </Flex>
              <Flex direction='column'>
                <Text color='#5072E8' fontWeight='600'>Texto do feed (opcional)</Text>
                {watch('feed') ? <Textarea value={watch('feedText')} onChange={(a) => { setValue('feedText', a.target.value) }} /> : <Textarea disabled/>}
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

export default AnimalReportModal