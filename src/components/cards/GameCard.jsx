import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from "framer-motion"


const GameCard = ({ delay = 1, statement, answer, userChoice, setUserChoice }) => {
    return (

        <Box
            pos='relative'
            w='265px'
            h='265px'>

            {/* Card*/}
            <motion.div
                animate={{ transform: 'rotateY(180deg)' }}
                transition={{
                    transform: { ease: "linear", duration: 0.5 },
                    delay
                }}
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    transformStyle: 'preserve-3d'
                }}
            >

                {/* Front of card */}
                <Flex
                    pos='absolute'
                    w='100%'
                    h='100%'
                    sx={{ backfaceVisibility: 'hidden' }}
                    bg='#fafafa'
                    borderRadius='20px 60px'
                    justify='center'
                    align='center'
                    color='#333'>
                    <Image src='/images/logo-black.svg' width={75} height={100} alt='logo' />
                </Flex>

                {/* Back of card */}
                <Flex
                    pos='absolute'
                    _hover={{ bg: 'orange.100' }}
                    cursor='pointer'
                    w='100%'
                    h='100%'
                    sx={{ backfaceVisibility: 'hidden' }}
                    bg='#fafafa'
                    borderRadius='20px 60px'
                    border='3px solid #DD6B1F'
                    color='#333'
                    justify='center'
                    align='center'
                    transform='rotateY(180deg)'>
                    <Stack align='center' gap={4}>
                        <Image src='/images/bubble.png' width={60} height={60} alt='logo' />
                        <Text fontSize='lg'>{statement}</Text>
                    </Stack>
                </Flex>
            </motion.div>
        </Box>
    )
}

export default GameCard