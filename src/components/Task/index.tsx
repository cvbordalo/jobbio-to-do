import { Checkbox, HStack, Icon, Text } from '@chakra-ui/react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
  toggleComplete: (id: string) => void;
  removeTask: (id: string) => void;
}

export function Task({
  id,
  title,
  isComplete,
  toggleComplete,
  removeTask
}: TaskProps) {
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
      <Checkbox onChange={() => toggleComplete(id)} isChecked={isComplete} />
      <Text
        ml={2}
        textDecoration={isComplete ? 'line-through' : ''}
        flex={1}
        color={'gray.100'}
      >
        {title}
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
        <Icon
          as={FiTrash2}
          color={'gray.300'}
          _hover={{ color: 'red.300' }}
          cursor={'pointer'}
          onClick={() => removeTask(id)}
        />
      </HStack>
    </HStack>
  );
}
