import { Box, Container, Link, Stack, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box bg={'gray.600'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text color="gray.100">
          © Developed by{' '}
          <Link href="https://www.linkedin.com/in/cvbordalo/" target="_blank">
            Carlos Vitor Bordalo
          </Link>{' '}
          to Jobbio.
        </Text>
      </Container>
    </Box>
  );
}
