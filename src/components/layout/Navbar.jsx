import { Flex, HStack, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex justify='space-between' align='center' pt='16px' pb='40px'>
      <Link as={NextLink} href='/' textDecoration='none'>
        <Heading size='md'>pape traoré</Heading>
      </Link>
      <HStack spacing={9}>
        <Link as={NextLink} href='/about'>
          about
        </Link>
        <Link as={NextLink} href='/projects'>
          projects
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
