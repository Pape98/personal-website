import { Flex, HStack, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const paths = ['/about', '/projects'];

  const links = paths.map((path) => {
    const isActive = router.pathname === path;
    const color = isActive ? 'primary' : 'secondary';
    return (
      <Link as={NextLink} href={path} key={path} color={color} _hover={{ color: 'primary' }}
      >
        {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
      </Link>
    );
  });

  return (
    <Flex justify='space-between' align='center' pt='16px' pb='40px'>
      <Link as={NextLink} href='/' textDecoration='none'>
        <Heading size='md'>PAPE TRAORE</Heading>
      </Link>
      <HStack spacing={9}>
        {links}
      </HStack>
    </Flex>
  );
};

export default Navbar;
