import { useForm } from "react-hook-form"
import { Textarea, InputGroup, InputRightAddon, Button, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Flex, Text, Input, Box, Grid, Img } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import RadioGroup from "../../RadioGroup"
import { SelectSpecies } from "../../../model/Enum/SpeciesEnum"
import { useState } from "react"
import axios from "axios"
import useUserContext from "../../../hooks/useUserContext"
import Dropzone from "react-dropzone"

enum Size {
  sm = 'small',
  md = 'medium',
  lg = 'big'
}

const sizeOptions = [{ label: Size.sm, icon: undefined },
{ label: Size.md, icon: undefined },
{ label: Size.lg, icon: undefined }]

const isToFeed = [{ label: 'Criar publicação', icon: undefined },
{ label: 'Não criar publicação', icon: undefined }]

type FormData = {
  name: string
  type: string
  size: Size
  ageInMonths: number
  createPublication: boolean
  publicationDescription: string
}

const AnimalRegisterModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isLoading, setLoading] = useState(false)
  const { userState } = useUserContext()
  const [file, setFile] = useState()
  const { watch, setValue, handleSubmit, register, reset } = useForm<FormData>({
    defaultValues: {
      createPublication: true,
      type: 'dog',
      size: Size.sm,
    }
  })

  const close = () => {
    reset()
    onClose()
  }

  const onDrop = (acceptedFiles: any) => {
    // Verifica se há pelo menos um arquivo
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setFile(Object.assign(file, {
          preview: URL.createObjectURL(file),
          base: base64String
        }))
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true)
    console.log(data)
    await axios.post(`${import.meta.env.VITE_BASE_API_URL}/v1/animal/sheltered/registration`, { ...data, ageInMonths: Number(data.ageInMonths), imageUrl: file?.base }, {
      headers: {
        Authorization: userState.accessToken,
      }
    }).then((res) => {
      setFile(undefined)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      close()
      setLoading(false)
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={close} size='xl'>
      <ModalOverlay />
      <ModalContent maxW="900px">
        <ModalHeader fontSize='24px' color='#5072E8' justifyContent='center'>
          <Flex align='center' gap='24px'>
            <FontAwesomeIcon icon={faPaw} size="2x"/> Registrar animal acolhido
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <Box p="14px 28px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction='column' gap='16px'>
              <Flex direction='column'>
                <Text color='#5072E8' fontWeight='600'>Nome do animal</Text>
                <Input {...register('name')} bgColor='#DFE4F6' focusBorderColor='#5072E8' />
              </Flex>
              <Flex gap='16px'>
                <Flex w='50%'>
                  <Dropzone onDrop={files => onDrop(files)} maxFiles={1} accept={{
                    'image/*': [],
                  }}>
                    {({ getRootProps, getInputProps }) => (
                      <Box w="100%" h="100%" backgroundColor="transparent" borderRadius="5px" border='2px dashed #5072E8' cursor="pointer" _hover={{ backgroundColor: '#00000012' }}>
                        <Grid {...getRootProps({ className: 'dropzone', onDrop: event => event.stopPropagation() })} w="100%" h="100%" placeContent="center">
                          <input {...getInputProps()} />
                          {!file?.preview ? <Text color="#5072E8" fontWeight="500">Arraste uma foto do animal</Text> : <Img src={file?.preview} w="400px" h="200px" />}
                        </Grid>
                      </Box>
                    )}
                  </Dropzone>
                </Flex>
                <Flex w='50%' align='flex-start' direction='column' gap='16px'>
                  <Flex w='100%' direction='column' gap='8px'>
                    <Text color='#5072E8' fontWeight='600'>Espécie</Text>
                    <RadioGroup options={SelectSpecies} name="especies" onChange={(x: string) => setValue('type', x)} />
                  </Flex>
                  <Flex w='100%' direction='column' gap='8px'>
                    <Text  color='#5072E8' fontWeight='600'>Tamanho</Text>
                    <RadioGroup options={sizeOptions} name="tamanho" onChange={(x: any) => setValue('size', x)} />
                  </Flex>
                </Flex>
              </Flex> 
              <Flex gap='16px'>
                <Flex w='50%' align='flex-start' direction='column'>
                  <Text color='#5072E8' fontWeight='600'>Publicação no feed</Text>
                  <RadioGroup options={isToFeed} name="para o feed?" onChange={(x: any) => { setValue('createPublication', x === 'Criar publicação') }} />
                </Flex>
                <Flex w='50%' align='flex-start' direction='column'>
                  <Text color='#5072E8' fontWeight='600'>Idade estimada</Text>
                  <InputGroup>
                    <Input type='number' {...register('ageInMonths')} />
                    <InputRightAddon children='Semanas' />
                  </InputGroup>
                </Flex>
              </Flex>
              <Flex direction='column'>
                <Text color='#5072E8' fontWeight='600'>Texto do feed (opcional)</Text>
                {watch('createPublication') ? <Textarea {...register('publicationDescription')} /> : <Textarea disabled />}
              </Flex>
            </Flex>
            <Flex justifyContent="flex-end" mt="18px" gap="12px">
              <Button variant='outline' onClick={close}>Cancelar</Button>
              <Button variant='solid' bg='#5072E8' color='#fff' type="submit" isDisabled={isLoading}>Registrar</Button>
            </Flex>
          </form>
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default AnimalRegisterModal