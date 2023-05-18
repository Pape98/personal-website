import { Flex, HStack, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex justify='space-between' align='center' pt='16px' pb='40px'>
      <Link as={NextLink} href='/' textDecoration='none'>
        <Heading size='lg'>Pape Traoré</Heading>
      </Link>
      <HStack spacing={9}>
        <Link as={NextLink} href='/about'>
          <Text>About</Text>
        </Link>
        <Link as={NextLink} href='/projects'>
          <Text>Projects</Text>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
