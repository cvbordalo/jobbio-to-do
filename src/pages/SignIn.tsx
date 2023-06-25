import {
  Flex,
  Box,
  Stack,
  Link,
  Heading,
  Text,
  FormControl
} from '@chakra-ui/react';
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { theme } from '../styles/theme';

const schema = yup
  .object({
    email: yup.string().email('Type a valid email').required('Email is needed'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is needed')
  })
  .required();

interface LoginFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/home');
  };

  const onSubmit = (userData: LoginFormData) => {
    console.log(userData);
    handleNavigateToHome();
  };

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color={'gray.200'} fontSize={'4xl'}>
            Sign in to your account
          </Heading>
          <Text fontSize={'lg'} color={'gray.200'}>
            and start your{' '}
            <Text as="span" color={'blue.300'}>
              to do list!
            </Text>{' '}
            ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={'gray.100'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                name="email"
                type={'email'}
                label="Email address"
                register={register('email', { required: true })}
              />
              <Text fontSize={'xs'} mt={1} color={'red.700'}>
                {errors.email?.message}
              </Text>
              <FormInput
                name="password"
                type={'password'}
                label="Password"
                register={register('password', { required: true })}
              />
              <Text fontSize={'xs'} mt={1} color={'red.700'}>
                {errors.password?.message}
              </Text>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <NavLink
                    to="/signup"
                    style={{ color: theme.colors.blue['700'] }}
                  >
                    Or create your account here!
                  </NavLink>
                </Stack>
                <FormButton
                  isDisabled={!isValid}
                  // isLoading
                  type="submit"
                  title="Sign In"
                />
              </Stack>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
