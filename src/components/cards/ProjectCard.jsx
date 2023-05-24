import { useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Flex, Stack, Heading, Text, Tag, useDisclosure } from '@chakra-ui/react';
import { motion } from "framer-motion"


import { ProjectDrawer } from '../elements';

const ProjectCard = ({ project }) => {
    const ref = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const tags = project.technologies?.map(tech => {
        return (
            <Tag size='md' key={tech}>
                {tech}
            </Tag>
        );
    });

    return (
        <>
            <ProjectDrawer isOpen={isOpen} onClose={onClose} project={project} />
            <motion.div whileHover={{
                scale: 1.05,
                transition: 'all 2s ease'

            }}>
                <Stack gap={5} flexWrap='wrap' cursor='pointer' onClick={onOpen} >
                    <Box flex='1' pos='relative' w="100%" aspectRatio='16/9' borderRadius='8px' overflow='hidden' >
                        {project.image?.length &&
                            <Image src={project.image[0].url} alt={project.title} fill={true} style={{ objectFit: 'cover', }} />
                        }
                    </Box>
                    {/* <Stack w={{ base: '350px', md: '350px' }} gap={2}>
                            <Heading size='sm'>{project.title}</Heading>
                            <Text>
                                {project.subtitle}
                            </Text>
                            <Flex gap={2} flexWrap='wrap'>{tags}</Flex>
                        </Stack> */}
                </Stack>
            </motion.div>
        </>
    )
}

export default ProjectCard;