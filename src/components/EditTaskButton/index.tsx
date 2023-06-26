import { Button } from '@chakra-ui/react';

interface EditTaskButtonProps {
  type: 'update' | 'cancel';
  isLoading?: boolean;
  updateTask: () => void;
  setIsBeingUpdated: Function;
}

export function EditTaskButton({
  type,
  isLoading = false,
  updateTask,
  setIsBeingUpdated,
  ...rest
}: EditTaskButtonProps) {
  if (type === 'update') {
    return (
      <Button
        bg={'blue.700'}
        h={'100%'}
        px={2}
        py={2}
        color={'white'}
        _hover={{
          bg: 'blue.500'
        }}
        justifyContent={'center'}
        gap={2}
        isLoading={isLoading}
        onClick={updateTask}
        {...rest}
      >
        Update
      </Button>
    );
  }

  return (
    <Button
      bg={'red.500'}
      h={'100%'}
      px={2}
      py={2}
      isLoading={isLoading}
      color={'white'}
      _hover={{
        bg: 'red.400'
      }}
      justifyContent={'center'}
      gap={2}
      onClick={() => setIsBeingUpdated(false)}
      {...rest}
    >
      Cancel
    </Button>
  );
}
