import { HStack } from '@chakra-ui/react';
import { TaskInput } from '../TaskInput';
import { CreateListButton } from '../CreateListButton';

interface FullCreateListProps {
  placeholder: string;
  createList: () => void;
  newListTitle: string;
  setNewListTitle: Function;
}

export function FullCreateList({
  placeholder,
  createList,
  newListTitle,
  setNewListTitle
}: FullCreateListProps) {
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
        value={newListTitle}
        onChange={e => {
          setNewListTitle(e.target.value);
        }}
        placeholder={placeholder}
      />
      <CreateListButton title="Create" createList={createList} />
    </HStack>
  );
}
