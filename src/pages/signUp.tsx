import {
  Flex,
  Box,
  HStack,
  Stack,
  Heading,
  Text,
  Link,
  FormControl,
  useToast
} from '@chakra-ui/react';
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';
import { FormInputPassword } from '../components/FormInputPassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';
import { UserAuth } from '../contexts/AuthContext';
import { useState } from 'react';

// Schema for registration
const schema = yup
  .object({
    email: yup.string().email('Type a valid email').required('Email is needed'),
    firstName: yup.string().required('First name is needed'),
    lastName: yup.string(),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is needed'),
    confirmPassword: yup
      .string()
      .required('Confirm password is needed')
      .oneOf([yup.ref('password')], 'Both passwords must be the same')
  })
  .required();

// Interface for Sign Up
interface SignUpFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export function SignUp() {
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { createUser } = UserAuth();
  const toast = useToast();

  // Submit login function by React Hook Form
  const onSubmit = async (userData: SignUpFormData) => {
    setIsLoading(true);

    try {
      await createUser(userData.email, userData.password);
      navigate('/home');
    } catch (error) {
      if (
        error == 'FirebaseError: Firebase: Error (auth/email-already-in-use).'
      ) {
        toast({
          position: 'top',
          title: 'Failed to create account',
          description: 'Email already registered.',
          status: 'error',
          duration: 4000,
          isClosable: true
        });
      } else {
        toast({
          position: 'top',
          title: 'Failed to create account',
          description: 'Please try again later',
          status: 'error',
          duration: 4000,
          isClosable: true
        });
      }

      console.log('Erro no firebase =>', error);
    } finally {
      setIsLoading(false);
    }
  };

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
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <HStack mb={-4}>
                <Box>
                  <FormInput
                    name="firstName"
                    type={'text'}
                    label="First Name"
                    register={register('firstName', { required: true })}
                  />
                </Box>
                <Box>
                  <FormInput
                    name="lastName"
                    type={'text'}
                    label="Last Name"
                    register={register('lastName', { required: true })}
                  />
                </Box>
              </HStack>
              {errors.firstName?.message && (
                <Text fontSize={'xs'} mt={1} color={'red.700'}>
                  {errors.firstName?.message}
                </Text>
              )}
              <FormInput
                name="email"
                type={'email'}
                label="Email Address"
                register={register('email', { required: true })}
              />
              {errors.email?.message && (
                <Text fontSize={'xs'} color={'red.700'}>
                  {errors.email?.message}
                </Text>
              )}
              <FormInputPassword
                type="password"
                register={register('password', { required: true })}
              />
              {errors.password?.message && (
                <Text fontSize={'xs'} mt={1} color={'red.700'}>
                  {errors.password?.message}
                </Text>
              )}
              <FormInputPassword
                type="confirmPassword"
                register={register('confirmPassword', { required: true })}
              />
              {errors.confirmPassword?.message && (
                <Text fontSize={'xs'} mt={1} color={'red.700'}>
                  {errors.confirmPassword?.message}
                </Text>
              )}

              <Stack spacing={10} pt={2}>
                <FormButton
                  isLoading={isLoading}
                  isDisabled={!isValid}
                  type="submit"
                  title="Sign Up"
                />
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already an user?{' '}
                  <NavLink to="/" style={{ color: theme.colors.blue['700'] }}>
                    Sign In
                  </NavLink>
                </Text>
              </Stack>
            </Stack>
          </FormControl>
        </Box>
      </Stack>
    </Flex>
  );
}
