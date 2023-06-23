import { Button } from '@chakra-ui/react';

interface FormButtonProps {
  title: string;
}

export function FormButton({ title }: FormButtonProps) {
  return (
    <Button
      bg={'blue.300'}
      color={'white'}
      _hover={{
        bg: 'blue.700'
      }}
    >
      {title}
    </Button>
  );
}
