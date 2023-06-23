import {
  FormControl,
  FormLabel,
  Input,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface FormInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  isRequired?: boolean;
}

export function FormInput({
  name,
  label,
  isRequired = false,
  ...rest
}: FormInputProps) {
  return (
    <FormControl isRequired={isRequired}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
        name={name}
        id={name}
        bgColor={'gray.100'}
        focusBorderColor="blue.300"
        {...rest}
      />
    </FormControl>
  );
}
