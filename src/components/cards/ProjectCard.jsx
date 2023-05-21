import { useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Flex, Stack, Heading, Text, Tag, useDisclosure } from '@chakra-ui/react';
import { motion } from "framer-motion"
import { useHover } from '@react-hooks-library/core';

import { ProjectDrawer } from '../elements';

const ProjectCard = ({ project }) => {
    const ref = useRef();
    const isHovered = useHover(ref);
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
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ height: '100%' }}
            >
                <Flex gap={5} flexWrap='wrap' cursor='pointer' onClick={onOpen}>
                    <Stack w={{ base: '350px', md: '350px' }} gap={2}>
                        <Heading size='md'>{project.title}</Heading>
                        <Text>
                            {project.subtitle}
                        </Text>
                        <Flex gap={2} flexWrap='wrap'>{tags}</Flex>
                    </Stack>
                    <Box flex='1' pos='relative' w="100%" aspectRatio='16/9' borderRadius='8px' overflow='hidden'>
                        {project.image?.length &&
                            <motion.div>
                                <Image src={project.image[0].url} alt={project.title} fill={true} style={{ objectFit: 'cover' }} />
                            </motion.div>
                        }
                    </Box>
                </Flex>
            </motion.div>
        </>
    )
}

export default ProjectCard;