import { Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react';

const Resume = () => {
  return (
    <Stack py='30px'>
      <Heading size='xl' pb={10}>
        Resume
      </Heading>
      <iframe src='documents/resume.pdf' style={{ height: '80vh' }} />
    </Stack>
  );
};

export default Resume;
