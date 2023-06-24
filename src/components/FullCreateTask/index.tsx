import { HStack } from '@chakra-ui/react';
import { TaskInput } from '../TaskInput';
import { CreateTaskButton } from '../CreateTaskButton';

interface FullCreateTaskProps {
  placeholder: string;
  createTask: () => void;
  newTaskTitle: string;
  setNewTaskTitle: Function;
}

export function FullCreateTask({
  placeholder,
  createTask,
  newTaskTitle,
  setNewTaskTitle
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
      <CreateTaskButton title="Create" createTask={createTask} />
    </HStack>
  );
}
