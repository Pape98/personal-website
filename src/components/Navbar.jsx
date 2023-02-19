import { Flex, HStack, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex justify='space-between' align='center' pt='16px'>
      <Heading size='md'>PAPE TRAORE</Heading>
      <HStack spacing={9}>
        <Link as={NextLink} href='/'>
          About
        </Link>
        <Link as={NextLink} href='/'>
          Projects
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
