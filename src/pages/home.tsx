import {
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { EmptyList } from '../components/EmptyList';
import { List } from '../components/List';
import { FullCreateList } from '../components/FullCreateList';
import { v4 as uuidv4 } from 'uuid';
import { UserAuth } from '../contexts/AuthContext';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

interface ListProps {
  id: string;
  title: string;
}

export function Home() {
  const [lists, setLists] = useState<ListProps[]>([]);
  const [newListTitle, setNewListTitle] = useState<string>('');

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log('error in logout', error);
    }
  };

  const handleCreateNewList = () => {
    if (!newListTitle) return;

    const newList = {
      id: uuidv4(),
      title: newListTitle
    };

    setLists([newList, ...lists]);
    setNewListTitle('');
  };

  const handleRemoveList = (id: string) => {
    const filteredLists = lists.filter(list => list.id !== id);

    setLists(filteredLists);
  };

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
      <HStack
        display={'flex'}
        justifyContent={'space-between'}
        w="100%"
        mt={-4}
        mb={8}
      >
        <HStack>
          <Text color={'blue.300'} fontWeight={'extrabold'}>
            You're logged as:{' '}
            <Text as="span" fontWeight={'extrabold'} color="purple.300">
              {user?.email}
            </Text>
          </Text>
        </HStack>
        <Icon
          as={FiLogOut}
          color={'gray.300'}
          _hover={{ color: 'red.300' }}
          cursor={'pointer'}
          boxSize={5}
          onClick={handleLogout}
        />
      </HStack>
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
