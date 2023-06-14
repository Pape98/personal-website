import { Flex, HStack, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const paths = ['/about', '/projects', '/resume'];

  const links = paths.map(path => {
    const isActive = router.pathname === path;
    const color = isActive ? 'orange.500' : 'secondary';
    const title = path.slice(1).charAt(0).toUpperCase() + path.slice(2);
    return (
      <Link
        px={2}
        as={NextLink}
        href={path}
        key={path}
        color={color}
        borderRadius='8px'
        _hover={{ bg: 'orange.500', color: 'white' }}
        transition='all 0.25s ease-in-out'
      >
        {isActive ? (
          <Text fontWeight='bold'>{title}</Text>
        ) : (
          <Text>{title}</Text>
        )}
      </Link>
    );
  });

  return (
    <Flex justify='space-between' align='center' pt='16px' pb='40px'>
      <Link as={NextLink} href='/' textDecoration='none'>
        <Image src='/images/logo.png' width={40} height={40} alt='pape' />
      </Link>
      <HStack spacing={4}>
        {links}
        {/* <NextLink locale={false} href='pdfs/resume.pdf'>
          Resume
        </NextLink> */}
      </HStack>
    </Flex>
  );
};

export default Navbar;
