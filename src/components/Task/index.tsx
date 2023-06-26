import {
  Checkbox,
  CircularProgress,
  HStack,
  Icon,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface TodoProps {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TodoProps;
  toggleComplete: (id: string, task: TodoProps) => void;
  removeTask: (id: string) => void;
}

export function Task({ task, toggleComplete, removeTask }: TaskProps) {
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  return (
    <HStack
      alignSelf={'flex-end'}
      w="95%"
      mt={2}
      bg="gray.500"
      padding="1rem"
      borderRadius={'0.5rem'}
      alignItems={'center'}
      justify={'space-between'}
      borderWidth={1}
      borderColor={'gray.400'}
    >
      <Checkbox
        onChange={() => toggleComplete(task.id, task)}
        isChecked={task.isComplete}
      />
      <Text
        ml={2}
        textDecoration={task.isComplete ? 'line-through' : ''}
        flex={1}
        color={'gray.100'}
      >
        {task.title}
      </Text>
      <HStack>
        <Icon
          as={FiEdit}
          color={'gray.300'}
          _hover={{ color: 'green.300' }}
          cursor={'pointer'}
          mr={2}
          // onClick={() => removeTask(id)}
        />
        {isDeleteLoading ? (
          <CircularProgress isIndeterminate size={4} color="gray.300" />
        ) : (
          <Icon
            as={FiTrash2}
            color={'gray.300'}
            _hover={{ color: 'red.300' }}
            cursor={'pointer'}
            onClick={async () => {
              setIsDeleteLoading(true);
              await removeTask(task.id);
              setIsDeleteLoading(false);
            }}
          />
        )}
      </HStack>
    </HStack>
  );
}
