import {
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Heading,
  Text,
  Box,
  Flex,
  Tag,
  Link,
  Divider,
} from '@chakra-ui/react';

import { defaultProjectImage } from '@/constants';

import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectDrawer = ({ isOpen, onClose, project }) => {
  const tags = project.technologies?.map(tech => {
    return (
      <Tag size='md' key={tech}>
        {tech}
      </Tag>
    );
  });

  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='md'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Divider />
          <DrawerBody>
            <Stack gap={5} pt='60px'>
              <Box>
                <Heading size='lg'>{project.title}</Heading>
                <Text>{project.subtitle}</Text>
              </Box>
              <Box
                bgImage={`url('${
                  project.image?.length > 0 ? project.image[0].url : ''
                }')`}
                bgPosition='center'
                bgRepeat='no-repeat'
                h='250px'
                w='auto'
                borderRadius='lg'
              />

              <Box>
                <Text>{project.description}</Text>
              </Box>
              <Box>
                <Heading size='sm' pb={3}>
                  technologies
                </Heading>
                <Flex gap={2}>{tags}</Flex>
              </Box>
              <Box>
                <Heading size='sm'>website</Heading>
                <Link href={project.website} isExternal>
                  {project.website}
                </Link>
              </Box>

              <Box>
                <Heading size='sm'>github</Heading>
                <Link href={project.github} isExternal>
                  {project.github}
                </Link>
              </Box>
            </Stack>
          </DrawerBody>
          <Flex w='100%' bg='black' padding={4} justify='center' align='center'>
            <Link href={project.website} isExternal color='white'>
              open project <ExternalLinkIcon mx='2px' />
            </Link>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProjectDrawer;
