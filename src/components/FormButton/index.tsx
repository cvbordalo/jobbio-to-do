import { Button, ButtonProps } from '@chakra-ui/react';

interface FormButtonProps extends ButtonProps {
  title: string;
}

export function FormButton({ title, ...rest }: FormButtonProps) {
  return (
    <Button
      bg={'blue.300'}
      color={'white'}
      _hover={{
        bg: 'blue.700'
      }}
      {...rest}
    >
      {title}
    </Button>
  );
}
