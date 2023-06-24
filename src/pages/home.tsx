import { Center, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { EmptyList } from '../components/EmptyList';
import { List } from '../components/List';
import { FullCreateList } from '../components/FullCreateList';
import { v4 as uuidv4 } from 'uuid';

interface ListProps {
  id: string;
  title: string;
}

export function Home() {
  const [lists, setLists] = useState<ListProps[]>([]);
  const [newListTitle, setNewListTitle] = useState<string>('');

  function handleCreateNewList() {
    if (!newListTitle) return;

    const newList = {
      id: uuidv4(),
      title: newListTitle
    };

    setLists([newList, ...lists]);
    setNewListTitle('');
  }

  function handleRemoveList(id: string) {
    const filteredLists = lists.filter(list => list.id !== id);

    setLists(filteredLists);
  }

  return (
    <VStack m="auto" minH={'100vh'} maxW={'46rem'}>
      <Flex position={'relative'} bottom={7} w="100%">
        <FullCreateList
          newListTitle={newListTitle}
          setNewListTitle={setNewListTitle}
          createList={handleCreateNewList}
          placeholder="Add a new list"
        />
      </Flex>
      <VStack w={'100%'} h={'100%'} maxW={'46rem'}>
        {lists.length <= 0 ? (
          <EmptyList />
        ) : (
          lists.map((list, index) => (
            <List
              index={index}
              key={list.id}
              title={list.title}
              id={list.id}
              removeList={handleRemoveList}
            />
          ))
        )}
      </VStack>
    </VStack>
  );
}
