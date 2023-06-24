import { Center, Icon, Text } from '@chakra-ui/react';
import { FiList } from 'react-icons/fi';

export function EmptyTasks() {
  return (
    <Center flexDir={'column'} mt={8}>
      <Icon as={FiList} width={16} height={16} mb={4} color={'gray.300'} />
      <Text fontWeight={'bold'} color={'gray.300'}>
        You have not yet registered tasks in this list
      </Text>
      <Text color={'gray.300'}>
        Create your first task whenever you are ready
      </Text>
    </Center>
  );
}
