import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';

interface CreateTaskButtonProps extends ButtonProps {
  title: string;
}

export function CreateTaskButton({ title, ...rest }: CreateTaskButtonProps) {
  return (
    <Button
      bg={'blue.700'}
      h={'100%'}
      px={4}
      py={2}
      color={'white'}
      _hover={{
        bg: 'blue.500'
      }}
      justifyContent={'center'}
      align={'center'}
      gap={2}
      {...rest}
    >
      {title}
      <Icon as={FiPlusCircle} />
    </Button>
  );
}
