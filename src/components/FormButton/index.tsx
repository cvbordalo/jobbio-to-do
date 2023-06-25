import { Button, ButtonProps } from '@chakra-ui/react';

interface FormButtonProps extends ButtonProps {
  title: string;
}

export function FormButton({ title, ...rest }: FormButtonProps) {
  return (
    <Button
      type="submit"
      bg={'blue.300'}
      color={'white'}
      _disabled={{
        bg: 'blue.200',
        cursor: 'not-allowed'
      }}
      _hover={{
        bg: 'blue.700'
      }}
      {...rest}
    >
      {title}
    </Button>
  );
}
