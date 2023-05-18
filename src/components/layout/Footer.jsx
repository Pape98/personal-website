import { Icon, Flex, HStack, Link, Text } from '@chakra-ui/react';

import { socialLinks } from '@/constants';

const Footer = () => {
  const links = socialLinks.map(link => {
    return (
      <Link key={link.title} href={link.url} isExternal display='flex'>
        <Icon as={link.icon} boxSize='1.2em' />
      </Link>
    );
  });

  return (
    <Flex mt='auto' align='center' justify='space-between'>
      <Text fontSize='sm'>
        © {new Date().getFullYear()} - built by pape traoré 😊
      </Text>
      <HStack spacing={2} justify='center' align='center'>
        {links}
      </HStack>
    </Flex>
  );
};

export default Footer;
