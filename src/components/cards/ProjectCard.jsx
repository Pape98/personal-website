import { useRef } from 'react';
import { useHover } from '@react-hooks-library/core';
import {
  Flex,
  Tag,
  Card,
  Heading,
  Text,
  Stack,
  Box,
  CardFooter,
  CardBody,
  useDisclosure,
} from '@chakra-ui/react';

import { ProjectDrawer } from '../elements';

const ProjectCard = ({ project }) => {
  const ref = useRef();
  const isHovered = useHover(ref);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gradient =
    'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 62%)';
  const image =
    'https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80';

  const tags = project.technologies?.map(tech => {
    return (
      <Tag size='md' key={tech}>
        {tech.toLowerCase()}
      </Tag>
    );
  });

  return (
    <>
      <ProjectDrawer isOpen={isOpen} onClose={onClose} project={project} />
      <Stack>
        <Heading size='lg'>{project.title?.toLowerCase()}</Heading>
        <Text fontSize='md'>{project.emojis}</Text>
        <Box
          position='relative'
          h='250px'
          w='auto'
          ref={ref}
          onClick={onOpen}
          cursor='pointer'
        >
          <Card
            bgImage={`url('${image}')`}
            bgPosition='center'
            bgRepeat='no-repeat'
            h='250px'
          >
            {isHovered && (
              <>
                <Box
                  position='absolute'
                  top='0'
                  left='0'
                  w='100%'
                  h='100%'
                  bg={gradient}
                  opacity={0.6}
                />
                <CardBody />
                <CardFooter zIndex={10}>
                  <Stack direction='column'>
                    <Text fontSize='2xl' color='white'>
                      {' '}
                      {project.subtitle?.toLowerCase()}
                    </Text>
                    <Flex gap={2}>{tags}</Flex>
                  </Stack>
                </CardFooter>
              </>
            )}
          </Card>
        </Box>
      </Stack>
    </>
  );
};

export default ProjectCard;
