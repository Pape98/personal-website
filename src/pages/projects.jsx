import { Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { airtable } from '@/config';
import { ProjectCard } from '@/components';


const Projects = ({ projects }) => {
  const list = projects.map(project => {
    return <ProjectCard key={project.title} project={project} />;
  });

  console.log(projects.length);

  return (
    <Stack py='30px'>
      <Heading size='xl' pb={10}>Projects</Heading>
      <Text pb={10}>
        This is where I post all of my projects. I tend to work on multiple
        things at the same time just for the sake of building cool things.
        If you have any cool project ideas please let me know 😊.{' '}
      </Text>
      <SimpleGrid pt='20px' columns={{ base: 1, md: 2 }} spacing={10}>
        {list}
      </SimpleGrid>
    </Stack>
  );
};

export const getStaticProps = async () => {
  const records = await airtable('Projects').select().firstPage();
  const projects = records.map(record => record.fields);
  projects.sort((a, b) => b.year - a.year);
  return {
    props: { projects },
  };
};

export default Projects;
