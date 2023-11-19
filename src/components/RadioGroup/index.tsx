import { useRadio, useRadioGroup, HStack, Box, Flex } from "@chakra-ui/react"
import useSpecieContext from "../../hooks/useSpecieContext"
import Species from "../../model/Enum/SpeciesEnum"

const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label' w='100%'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        color='#5072E8'
        bg='#DFE4F6'
        _hover={{
          boxShadow: 'outline',
        }}
        _checked={{
          bg: '#5072E8',
          color: 'white',
          borderColor: '#5072E8',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export type RadioOptions = {
  label: string,
  icon: JSX.Element
}

const RadioGroup = ({ options, name }: { options: RadioOptions[], name: string }) => {

  const { setSpecieState } = useSpecieContext()

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: options[0].label,
    onChange: setSpecieState,
  })

  const group = getRootProps()

  return (
    <HStack {...group} w='100%'>
      {options.map((value: RadioOptions) => {
        const radio = getRadioProps({value:value.label})
        return (
          <RadioCard key={value} {...radio}>
            <Flex direction='column' align='center'>
              {value.icon}
              {value.label}
            </Flex>
          </RadioCard>
      )})}
    </HStack>
  )
}

export default RadioGroup 

