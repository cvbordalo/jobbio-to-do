import { HStack } from '@chakra-ui/react';
import { TaskInput } from '../TaskInput';
import { CreateTaskButton } from '../CreateTaskButton';

interface FullCreateTaskProps {
  placeholder: string;
  listId: string;
  createTask: (listId: string) => void;
  newTaskTitle: string;
  setNewTaskTitle: Function;
  isLoading: boolean;
}

export function FullCreateTask({
  placeholder,
  createTask,
  listId,
  newTaskTitle,
  setNewTaskTitle,
  isLoading
}: FullCreateTaskProps) {
  return (
    <HStack
      w={'100%'}
      mx={0}
      h="3.375rem"
      align={'center'}
      justify={'center'}
      spacing={2}
    >
      <TaskInput
        value={newTaskTitle}
        onChange={e => {
          setNewTaskTitle(e.target.value);
        }}
        placeholder={placeholder}
      />
      <CreateTaskButton
        isLoading={isLoading}
        title="Create"
        createTask={() => createTask(listId)}
      />
    </HStack>
  );
}
