import { Flex, Box, Stack, Link, Heading, Text } from '@chakra-ui/react';
import { FormButton } from '../components/FormButton';
import { NavLink } from 'react-router-dom';
import { FormInput } from '../components/FormInput';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/home');
  };

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
            <FormInput name="email" type={'email'} label="Email address" />
            <FormInput name="password" type={'password'} label="Password" />
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
              <FormButton title="Sign In" onClick={handleNavigateToHome} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
