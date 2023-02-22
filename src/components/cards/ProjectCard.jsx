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
} from '@chakra-ui/react';

const ProjectCard = () => {
  const ref = useRef();
  const isHovered = useHover(ref);

  const gradient =
    'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 62%)';
  const image =
    'https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80';

  return (
    <Stack>
      <Heading size='lg'>sprout tracking</Heading>
      <Text fontSize='md'>⌚ // 🍊 // 🏋️</Text>
      <Box position='relative' h='250px' w='auto' ref={ref}>
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
                    a better way to track with people
                  </Text>
                  <Flex gap={2}>
                    <Tag size='md'>React</Tag>
                    <Tag size='md'>Chakra UI</Tag>
                    <Tag size='md'>NextJs</Tag>
                  </Flex>
                </Stack>
              </CardFooter>
            </>
          )}
        </Card>
      </Box>
    </Stack>
  );
};

export default ProjectCard;
