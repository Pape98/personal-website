import { Flex, Stack, Text, Heading, Icon, SimpleGrid } from '@chakra-ui/react';
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

      <Heading size='md' pt={10}>FEATURED PROJECTS</Heading>
      <SimpleGrid pt='20px' columns={{ base: 1, md: 2 }} spacing={10}>
        {list}
      </SimpleGrid>
    </Stack>
  );
};

export const getStaticProps = async () => {
  const records = await airtable('Projects').select().firstPage();
  let projects = records.map(record => record.fields);
  projects.sort((a, b) => b.year - a.year);
  // remove projects that are not featured
  projects = projects.filter(project => project.isFeatured === 'true');
  return {
    props: { projects },
  };
};

export default Home;
