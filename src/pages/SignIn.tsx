import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Heading,
  Text
} from '@chakra-ui/react';
import { FormButton } from '../components/FormButton';
import { NavLink } from 'react-router-dom';

export function SignIn() {
  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color={'gray.200'} fontSize={'4xl'}>
            Sign in to your account
          </Heading>
          <Text fontSize={'lg'} color={'gray.200'}>
            and start your <Link color={'blue.300'}>to do list!</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={'gray.100'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <NavLink to="/signup">
                  <Link color={'blue.300'}>Or create your account here!</Link>
                </NavLink>
              </Stack>
              <FormButton title="Sign In" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
