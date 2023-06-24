import {
  Box,
  Checkbox,
  HStack,
  Heading,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Task } from '../Task';
import { EmptyTasks } from '../EmptyTasks';
import { FullCreateTask } from '../FullCreateTask';
import { v4 as uuidv4 } from 'uuid';

interface ListProps {
  id: string;
  title: string;
  removeList: (id: string) => void;
}

interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export function List({ title, id, removeList }: ListProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const completedTasks = tasks.filter(task => task.isComplete).length;

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id: string) {
    const mappedTasks = tasks.map(task =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete
          }
        : task
    );

    setTasks(mappedTasks);
  }

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredTasks);
  }

  return (
    <>
      <HStack display={'flex'} justify={'space-between'} w={'100%'}>
        <Heading alignSelf={'flex-start'} color={'gray.200'} fontSize={'xl'}>
          {title}
        </Heading>
        <Icon
          as={FiTrash2}
          color={'gray.300'}
          _hover={{ color: 'red.300' }}
          cursor={'pointer'}
          boxSize={6}
          onClick={() => removeList(id)}
        />
      </HStack>
      <HStack
        justifyContent={'space-between'}
        w="95%"
        mt={4}
        alignSelf={'flex-end'}
      >
        <HStack>
          <Text color={'blue.300'} fontWeight={'extrabold'}>
            Tasks created
          </Text>
          <Box px={2} py={0.3} borderRadius={4} bg={'gray.400'}>
            <Text fontWeight={'extrabold'} color={'gray.100'}>
              {tasks.length}
            </Text>
          </Box>
        </HStack>
        <HStack>
          <Text color={'purple.300'} fontWeight={'extrabold'}>
            Completed
          </Text>
          <Box px={2} py={0.2} borderRadius={4} bg={'gray.400'}>
            <Text fontWeight={'extrabold'} color={'gray.100'}>
              {completedTasks} of {tasks.length}
            </Text>
          </Box>
        </HStack>
      </HStack>
      <VStack w={'100%'} display={'flex'} justifyContent={'flex-end'}>
        <Box w="95%" alignSelf={'flex-end'} mt={4}>
          <FullCreateTask
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
            placeholder="Add a new task"
            createTask={handleCreateNewTask}
          />
        </Box>
        {tasks.length <= 0 ? (
          <EmptyTasks />
        ) : (
          tasks.map(task => (
            <Task
              removeTask={handleRemoveTask}
              key={task.id}
              id={task.id}
              toggleComplete={handleToggleTaskCompletion}
              title={task.title}
              isComplete={task.isComplete}
            />
          ))
        )}
      </VStack>
    </>
  );
}
