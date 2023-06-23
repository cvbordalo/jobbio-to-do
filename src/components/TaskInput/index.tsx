import { Input, InputProps } from '@chakra-ui/react';

interface TaskInputProps extends InputProps {
  placeholder: string;
}

export function TaskInput({ placeholder, ...rest }: TaskInputProps) {
  return (
    <Input
      p={'1rem'}
      h={'100%'}
      w={'100%'}
      borderRadius={8}
      bgColor={'gray.500'}
      color={'gray.100'}
      borderWidth={0}
      placeholder={placeholder}
      focusBorderColor="blue.300"
      _placeholder={{ color: 'gray.300' }}
      {...rest}
    />
  );
}
