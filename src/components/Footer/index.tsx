import { Box, Container, Link, Stack, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box bg={'gray.600'} mt={'auto'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text color="gray.100" fontWeight={'bold'}>
          © Developed by{' '}
          <Link
            color={'blue.300'}
            href="https://www.linkedin.com/in/cvbordalo/"
            target="_blank"
          >
            Carlos Vitor Bordalo
          </Link>{' '}
          to Jobbio.
        </Text>
      </Container>
    </Box>
  );
}
