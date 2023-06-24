import { Center, Icon, Text, VStack } from '@chakra-ui/react';
import { FiClipboard } from 'react-icons/fi';

export function EmptyList() {
  return (
    <VStack flexDir={'column'} mt={24}>
      <Icon as={FiClipboard} width={16} height={16} mb={4} color={'gray.300'} />
      <Text fontWeight={'bold'} color={'gray.300'}>
        You have not yet registered lists
      </Text>
      <Text color={'gray.300'}>
        Create your first list and start your to-do!
      </Text>
    </VStack>
  );
}
