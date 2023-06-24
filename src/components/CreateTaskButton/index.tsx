import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';

interface CreateTaskButtonProps extends ButtonProps {
  title: string;
  createTask: () => void;
}

export function CreateTaskButton({
  title,
  createTask,
  ...rest
}: CreateTaskButtonProps) {
  return (
    <Button
      bg={'purple.700'}
      h={'100%'}
      px={4}
      py={2}
      color={'white'}
      _hover={{
        bg: 'purple.500'
      }}
      justifyContent={'center'}
      align={'center'}
      gap={2}
      {...rest}
      onClick={createTask}
    >
      {title}
      <Icon as={FiPlusCircle} />
    </Button>
  );
}
