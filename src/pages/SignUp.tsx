import {
  Flex,
  Box,
  HStack,
  Stack,
  Heading,
  Text,
  Link
} from '@chakra-ui/react';
import { FormButton } from '../components/FormButton';
import { NavLink } from 'react-router-dom';
import { FormInput } from '../components/FormInput';
import { FormInputPassword } from '../components/FormInputPassword';

export function SignUp() {
  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color={'gray.200'} fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.200'}>
            and start your <Link color={'blue.300'}>to do list!</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={'gray.100'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormInput
                  isRequired
                  name="firstname"
                  type={'text'}
                  label="First Name"
                />
              </Box>
              <Box>
                <FormInput
                  isRequired
                  name="lastname"
                  type={'text'}
                  label="Last Name"
                />
              </Box>
            </HStack>
            <FormInput
              isRequired
              name="email"
              type={'email'}
              label="Email Address"
            />
            <FormInputPassword />
            <Stack spacing={10} pt={2}>
              <FormButton title="Sign Up" />F
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already an user?{' '}
                <NavLink to={'/'}>
                  <Link color={'blue.400'}>Login</Link>
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
