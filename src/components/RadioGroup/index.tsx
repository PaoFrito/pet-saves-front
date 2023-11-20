import { useRadio, useRadioGroup, HStack, Box, Flex } from "@chakra-ui/react"

const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Flex as='label' w='100%'>
      <input {...input} />
      <Flex
        w='100%'
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
      </Flex>
    </Flex>
  )
}

export type RadioOptions = {
  label: string,
  icon: JSX.Element | undefined | string
}

const RadioGroup = ({ options, name, onChange }: { options: RadioOptions[], name: string, onChange: CallableFunction }) => {

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: options[0].label,
    onChange: (value)=>onChange(value),
  })

  const group = getRootProps()

  return (
    <HStack {...group} w='100%'>
      {options.map((value: RadioOptions) => {
        const radio = getRadioProps({value:value.label})
        return (
          <RadioCard key={value} {...radio}>
            <Flex direction='column' align='center' borderRadius='4px' w='100%'>
              {value.icon}
              {value.label}
            </Flex>
          </RadioCard>
      )})}
    </HStack>
  )
}

export default RadioGroup 

