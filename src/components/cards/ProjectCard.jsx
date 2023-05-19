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
            <Stack w={{ base: '350px', md: '250px' }} gap={2}>
                <Heading size='sm'>{project.title}</Heading>
                <Text>
                    {project.subtitle}
                </Text>
                <Flex gap={2} flexWrap='wrap'>{tags}</Flex>
            </Stack>
            <Box flex='1' pos='relative' w="100%" aspectRatio='16/9' borderRadius='8px' overflow='hidden'>
                {/* {project.image?.length &&
                    <img src={project.image[0].url} alt={project.title} style={{ borderRadius: '10px', height: '100%' }} />
                } */}
                <Image src={project.image[0].url} alt={project.title} fill={true} style={{ objectFit: 'cover' }} />
            </Box>
        </Flex>
    )
}

export default ProjectCard;