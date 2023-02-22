import { Stack, Text, Heading } from '@chakra-ui/react';

import { ProjectCard } from '../components';

const Projects = () => {
  const list = Array(30)
    .fill(0)
    .map((x, i) => {
      return <ProjectCard key={i} />;
    });

  return (
    <Stack py='50px'>
      <Heading size='2xl'>💻 projects</Heading>
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

export default Projects;
