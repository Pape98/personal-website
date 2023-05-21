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
import Image from 'next/image';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { defaultProjectImage } from '@/constants';

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
                {/* <Text>{project.subtitle}</Text> */}
              </Box>
              <Box flex='1' pos='relative' w="100%" aspectRatio='16/9' borderRadius='8px' overflow='hidden'>
                {project.image?.length &&
                  <Image src={project.image[0].url} alt={project.title} fill={true} style={{ objectFit: 'cover' }} />}
              </Box>

              <Box>
                <Text>{project.description}</Text>
              </Box>
              <Box>
                <Heading size='sm' pb={3}>
                  Technologies
                </Heading>
                <Flex gap={2}>{tags}</Flex>
              </Box>

              {project.website && <Box>
                <Heading size='sm'>Website</Heading>
                <Link href={project.website} isExternal>
                  {project.website}
                </Link>
              </Box>}

              {project.github && <Box>
                <Heading size='sm'>Github</Heading>
                <Link href={project.github} isExternal>
                  {project.github}
                </Link>
              </Box>}

            </Stack>
          </DrawerBody>

          {project.website && <Flex w='100%' bg='black' padding={4} justify='center' align='center'>
            <Link href={project.website} isExternal color='white'>
              Open project <ExternalLinkIcon mx='2px' />
            </Link>
          </Flex>}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProjectDrawer;
