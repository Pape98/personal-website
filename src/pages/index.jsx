import { Flex, Stack, Text, Heading, Icon } from '@chakra-ui/react';
import { socialLinks } from '@/constants';
import { airtable } from '@/config';
import { ProjectCard } from '@/components';

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

const Home = ({ projects }) => {
  const list = projects.map(project => {
    return <ProjectCard key={project.title} project={project} />;
  });

  return (
    <Stack>
      <Text>
        👋🏽 Hey I am pape, a web developer currently based in New Hamsphire and the founder of Breadlabs. I
        enjoy building tools and learning about new technologies 📚.
      </Text>

      <Heading size='sm' pt={10}>SELECTED PROJECTS</Heading>
      <Stack pt='20px' spacing={6}> {list}</Stack>
    </Stack>
  );
};

export const getStaticProps = async () => {
  const records = await airtable('Projects').select().firstPage();
  const projects = records.map(record => record.fields);
  return {
    props: { projects },
  };
};

export default Home;
