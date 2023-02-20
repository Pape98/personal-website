import Image from 'next/image';
import { Flex, Stack, Text, Heading, Icon } from '@chakra-ui/react';

import { socialLinks } from '@/constants';

const SocialMedia = () => {
  const links = socialLinks.map(link => {
    return (
      <Stack key={link.title} direction='row' align='center'>
        <Text>{link.title}</Text>
        <Icon as={link.icon} boxSize='1.2em' color={link.color} />
      </Stack>
    );
  });

  return (
    <Flex gap={4} pt={4} direction={{ base: 'column', md: 'row' }}>
      {links}
    </Flex>
  );
};

const Home = () => {
  return (
    <Stack>
      <Flex my='5rem' gap={7} direction={{ base: 'column', md: 'row' }}>
        <Flex justify={{ base: 'center', lg: 'flex-start' }} flexShrink={0}>
          <Image
            src='https://via.placeholder.com/200'
            width={175}
            height={175}
            alt='Pape Traore'
            style={{ align: 'center' }}
          />
        </Flex>
        <Stack direction='column'>
          <Text fontSize='4xl' noOfLines={2}>
            Hi, I&apos;m Pape 👋🏽
          </Text>

          <Text fontSize='xl'>
            I am a software developer who enjoys building tools and learning
            about new technologies 📚!.
          </Text>
          <SocialMedia />
        </Stack>
      </Flex>
      <Heading size='md'>PROJECTS</Heading>
      <Stack direction='column'></Stack>
    </Stack>
  );
};

export default Home;
