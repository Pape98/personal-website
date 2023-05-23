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
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                style={{ height: '100%' }}
            >
                <motion.div whileHover={{
                    scale: 1.05,
                    padding: '10px 0',
                    transition: 'all 2s ease'

                }}>
                    <Flex gap={5} flexWrap='wrap' cursor='pointer' onClick={onOpen} >
                        <Stack w={{ base: '350px', md: '350px' }} gap={2}>
                            <Heading size='sm'>{project.title}</Heading>
                            <Text>
                                {project.subtitle}
                            </Text>
                            <Flex gap={2} flexWrap='wrap'>{tags}</Flex>
                        </Stack>
                        <Box flex='1' pos='relative' w="100%" aspectRatio='16/9' borderRadius='8px' overflow='hidden' >
                            {project.image?.length &&
                                <Image src={project.image[0].url} alt={project.title} fill={true} style={{ objectFit: 'cover', }} />
                            }
                        </Box>
                    </Flex>
                </motion.div>
            </motion.div>
        </>
    )
}

export default ProjectCard;