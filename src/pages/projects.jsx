import { Stack, Text, Heading } from '@chakra-ui/react';

import { airtable } from '@/config';
import { ProjectCard } from '@/components';

const Projects = ({ projects }) => {
  const list = projects.map(project => {
    return <ProjectCard key={project.title} project={project} />;
  });

  return (
    <Stack py='50px'>
      <Heading size='2xl'>💻 Projects</Heading>
      <Text fontSize='xl'>
        This is where I post all of my projects. I tend to work on multiple
        things at the same time just for the sake of building cool things.{' '}
      </Text>

      <Stack pt='20px' gap='60px'>
        {list}
      </Stack>
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

export default Projects;
