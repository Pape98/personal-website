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
      <Stack direction='column'>
        <Text>
          👋🏽 hey i am pape, a web developer currently based in new hamsphire. i
          enjoy building tools and learning about new technologies 📚.
        </Text>
      </Stack>
      <Heading size='md'>selected projects</Heading>
      <Stack direction='column'></Stack>
    </Stack>
  );
};

export default Home;
