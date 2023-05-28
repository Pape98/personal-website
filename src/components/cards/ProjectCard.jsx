import { useRef } from 'react';
import Image from 'next/image';
import { Box, Tag, useDisclosure } from '@chakra-ui/react';
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
            <motion.div
                whileHover={{
                    scale: 1.05,
                    transition: 'all 2s ease',
                    filter: 'grayscale(0%)'
                }}
                style={{ filter: 'grayscale(95%)', backgroundColor: '#DD6B1F', borderRadius: '8px' }}
            >
                <Box
                    pos='relative'
                    w="100%"
                    h="100%"
                    cursor='pointer'
                    aspectRatio='16/9'
                    borderRadius='8px'
                    overflow='hidden'
                    onClick={onOpen}
                >
                    {project.image?.length &&
                        <Image src={project.image[0].url}
                            alt={project.title}
                            fill={true}
                            style={{ objectFit: 'cover' }} />
                    }
                </Box>
            </motion.div>
        </>
    )
}

export default ProjectCard;