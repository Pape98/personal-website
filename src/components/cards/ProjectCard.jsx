/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Box, Flex, Stack, Heading, Text, Tag } from '@chakra-ui/react';

const ProjectCard = ({ project }) => {
    const tags = project.technologies?.map(tech => {
        return (
            <Tag size='md' key={tech}>
                {tech}
            </Tag>
        );
    });

    return (
        <Flex gap={5} flexWrap='wrap'>
            <Stack w={{ sm: '250px', lg: '350px', xl: '450px' }} gap={2}>
                <Heading size='sm'>{project.title}</Heading>
                <Text>
                    {project.subtitle}
                </Text>
                <Flex gap={2} flexWrap='wrap'>{tags}</Flex>
            </Stack>
            <Box flex='1'>
                {project.image.length &&
                    <img src={project.image[0].url} alt={project.title} style={{ borderRadius: '10px', height: '100%' }} />
                }
            </Box>
        </Flex>
    )
}

export default ProjectCard;