import { Flex, HStack, Icon, Text, VStack, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { EmptyList } from '../components/EmptyList';
import { List } from '../components/List';
import { FullCreateList } from '../components/FullCreateList';
import { UserAuth } from '../contexts/AuthContext';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { createList, deleteList, getListsByUser } from '../queries';

export interface ListProps {
  id: string;
  title: string;
}

export function Home() {
  const [lists, setLists] = useState<ListProps[]>([]);
  const [newListTitle, setNewListTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const toast = useToast();

  // User Logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log('Error in logout =>', error);
    }
  };

  // Create List by User
  const handleCreateNewList = async () => {
    try {
      if (!newListTitle) return;
      setIsLoading(true);
      const listId = await createList(user?.uid, newListTitle);

      const newList = {
        id: listId as string,
        title: newListTitle
      };

      setLists([newList, ...lists]);
      setNewListTitle('');
      setIsLoading(false);
      toast({
        position: 'top',
        title: 'List created',
        description: 'Your list was created successfuly',
        status: 'success',
        duration: 4000,
        isClosable: true
      });
    } catch (error) {
      console.log('Error while creating list =>', error);
      toast({
        position: 'top',
        title: 'List not created',
        description: 'Failed to create new list',
        status: 'error',
        duration: 4000,
        isClosable: true
      });
    }
  };

  // Delete List
  const handleRemoveList = async (id: string) => {
    try {
      await deleteList(id);
      const filteredLists = lists.filter(list => list.id !== id);

      setLists(filteredLists);
      toast({
        position: 'top',
        title: 'List deleted',
        description: 'Your list was deleted successfuly',
        status: 'error',
        duration: 4000,
        isClosable: true
      });
    } catch (error) {
      console.log('Error in deleting list => ', error);
    }
  };

  // Redirects non authenticated user
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  // Read list from firebase
  useEffect(() => {
    const fetchLists = async () => {
      const response = await getListsByUser(user?.uid as string);

      setLists(response);
    };

    if (user?.uid) {
      fetchLists();
    }
  }, [user?.uid]);

  return (
    <VStack m="auto" minH={'100vh'} maxW={'46rem'} mx={[4, 'auto']}>
      <Flex position={'relative'} bottom={7} w="100%">
        <FullCreateList
          isLoading={isLoading}
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
