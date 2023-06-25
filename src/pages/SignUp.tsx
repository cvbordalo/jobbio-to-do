import {
  Flex,
  Box,
  HStack,
  Stack,
  Heading,
  Text,
  Link,
  FormControl
} from '@chakra-ui/react';
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';
import { FormInputPassword } from '../components/FormInputPassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { theme } from '../styles/theme';

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

interface SignUpFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = (userData: SignUpFormData) => {
    console.log(userData);
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
                  isDisabled={!isValid}
                  type="submit"
                  title="Sign Up"
                />
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already an user?{' '}
                  <NavLink to="/" style={{ color: theme.colors.blue['700'] }}>
                    Login
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
