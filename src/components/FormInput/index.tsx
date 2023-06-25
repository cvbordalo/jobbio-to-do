import {
  FormControl,
  FormLabel,
  Input,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface FormInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  register: any;
}

export function FormInput({ name, label, register, ...rest }: FormInputProps) {
  return (
    <FormControl mt={4}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
        {...register}
        name={name}
        id={name}
        bgColor={'gray.100'}
        focusBorderColor="blue.300"
        {...rest}
      />
    </FormControl>
  );
}
