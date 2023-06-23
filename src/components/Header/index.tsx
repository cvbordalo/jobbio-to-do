import { Center, Heading } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export function Header() {
  return (
    <Center
      bg={'gray.700'}
      h={'12.5rem'}
      position={'relative'}
      borderBottomRadius={36}
    >
      <CheckCircleIcon w={10} h={10} color="blue.300" marginRight={4} />
      <Heading
        color={'purple.700'}
        fontWeight={'extrabold'}
        alignItems={'center'}
        fontSize={'5xl'}
        letterSpacing={'tighter'}
      >
        Jobbio
      </Heading>{' '}
      <Heading
        fontSize={'5xl'}
        color={'blue.300'}
        fontWeight={'extrabold'}
        ml={2}
        letterSpacing={'tighter'}
      >
        to
      </Heading>{' '}
      <Heading
        letterSpacing={'tighter'}
        fontSize={'5xl'}
        color={'purple.700'}
        fontWeight={'extrabold'}
      >
        do
      </Heading>
      <Heading
        letterSpacing={'tighter'}
        fontSize={'5xl'}
        color={'blue.300'}
        fontWeight={'extrabold'}
        ml={2}
      >
        .
      </Heading>
    </Center>
  );
}
