import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';

interface CreateListButtonProps extends ButtonProps {
  title: string;
  createList: () => void;
}

export function CreateListButton({
  title,
  createList,
  ...rest
}: CreateListButtonProps) {
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
      onClick={createList}
      {...rest}
    >
      {title}
      <Icon as={FiPlusCircle} />
    </Button>
  );
}
