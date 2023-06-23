import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FormButton } from '../components/FormButton';
import { NavLink } from 'react-router-dom';
import { FormInput } from '../components/FormInput';

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

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
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  focusBorderColor="blue.300"
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <FormButton title="Sign Up" />
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
