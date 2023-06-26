import {
  Box,
  CircularProgress,
  HStack,
  Heading,
  Icon,
  Input,
  Text,
  VStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Task } from '../Task';
import { EmptyTasks } from '../EmptyTasks';
import { FullCreateTask } from '../FullCreateTask';
import {
  createTask,
  deleteTask,
  getTasksByList,
  toggleCompleteTask,
  updateListTitle
} from '../../queries';
import { UserAuth } from '../../contexts/AuthContext';
import { EditTaskButton } from '../EditTaskButton';
import { useNavigate } from 'react-router-dom';

// Interface for Lists
interface ListProps {
  index: number;
  id: string;
  title: string;
  removeList: (id: string) => void;
}

// Interface for Tasks
export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export function List({ title, id, removeList, index }: ListProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false);
  const [updatedList, setUpdatedList] = useState<string>('');
  const [isUpdateLoading, setIsUpdateLoading] = useState<boolean>(false);

  const { user } = UserAuth();
  const navigate = useNavigate();

  // Toggle edit List Title
  const toggleIsBeingEdited = () => {
    setIsBeingEdited(!isBeingEdited);
  };

  const completedTasks = tasks.filter(task => task.isComplete).length;

  const handleCreateNewTask = async (listId: string) => {
    if (!newTaskTitle) return;
    setIsLoading(true);
    const taskId = await createTask(listId, newTaskTitle);

    const newTask = {
      id: taskId as string,
      title: newTaskTitle,
      isComplete: false
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    setIsLoading(false);
  };

  // Toggle checkbox from task
  const handleToggleTaskCompletion = async (id: string, task: TaskProps) => {
    try {
      await toggleCompleteTask(task);

      const mappedTasks = tasks.map(task =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      );

      setTasks(mappedTasks);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete task
  const handleRemoveTask = async (id: string) => {
    try {
      await deleteTask(id);
      const filteredTasks = tasks.filter(task => task.id !== id);

      setTasks(filteredTasks);
    } catch (error) {
      console.log(error);
    }
  };

  // Update List title
  const handleUpdateListTitle = async () => {
    setIsUpdateLoading(true);
    try {
      await updateListTitle(id, updatedList);

      title = updatedList;
      navigate(0);
    } catch (error) {
      console.log(error);
    } finally {
      setIsBeingEdited(false);
      setIsUpdateLoading(false);
    }
  };

  // Read list from firebase
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasksByList(id as string);

      setTasks(response);
    };

    if (user?.uid) {
      fetchTasks();
    }
  }, [id]);

  return (
    <>
      <HStack
        display={'flex'}
        justify={'space-between'}
        w={'100%'}
        mt={index === 0 ? 0 : 8}
      >
        <HStack>
          {isBeingEdited ? (
            <HStack w={'100%'} spacing={2}>
              <Input
                ml={2}
                flex={1}
                _placeholder={{ color: 'gray.100' }}
                placeholder={title}
                onChange={event => setUpdatedList(event.target.value)}
                color={'gray.100'}
              />
              <EditTaskButton
                setIsBeingUpdated={setIsBeingEdited}
                type="update"
                updateTask={handleUpdateListTitle}
                isLoading={isUpdateLoading}
              />
              <EditTaskButton
                setIsBeingUpdated={setIsBeingEdited}
                type="cancel"
                updateTask={() => {}}
              />
            </HStack>
          ) : (
            <>
              <Heading
                alignSelf={'flex-start'}
                color={'gray.200'}
                fontSize={'xl'}
              >
                {title}
              </Heading>
              <Icon
                as={FiEdit}
                color={'gray.300'}
                _hover={{ color: 'green.300' }}
                boxSize={5}
                cursor={'pointer'}
                ml={2}
                onClick={toggleIsBeingEdited}
              />
            </>
          )}
        </HStack>
        {isDeleteLoading ? (
          <CircularProgress isIndeterminate size={4} color="gray.300" />
        ) : (
          <Icon
            as={FiTrash2}
            color={'gray.300'}
            _hover={{ color: 'red.300' }}
            cursor={'pointer'}
            boxSize={6}
            onClick={async () => {
              setIsDeleteLoading(true);
              await removeList(id);
              setIsDeleteLoading(false);
            }}
          />
        )}
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
          <Text
            color={
              completedTasks != 0 && completedTasks == tasks.length
                ? 'green.300'
                : 'purple.300'
            }
            fontWeight={'extrabold'}
          >
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
            listId={id}
            isLoading={isLoading}
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
              task={task}
              removeTask={handleRemoveTask}
              key={task.id}
              toggleComplete={handleToggleTaskCompletion}
            />
          ))
        )}
      </VStack>
    </>
  );
}
