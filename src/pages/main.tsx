import { Flex, HStack, VStack } from '@chakra-ui/react';
import { TaskInput } from '../components/TaskInput';
import { CreateTaskButton } from '../components/CreateTaskButton';

export function Main() {
  return (
    <Flex m="auto" h={'100vh'} maxW={'46rem'}>
      <HStack
        position={'relative'}
        w={'100%'}
        mx={['4', '0']}
        h="3.375rem"
        align={'center'}
        justify={'center'}
        bottom={7}
        spacing={2}
      >
        <TaskInput placeholder="Add a new task" />
        <CreateTaskButton title="Create" />
      </HStack>
      <VStack m="auto" h={'100vh'} maxW={'46rem'}></VStack>
    </Flex>
  );
}
