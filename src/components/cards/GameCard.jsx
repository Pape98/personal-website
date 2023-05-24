import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const GameCard = () => {
    return (
        <Box
            pos='relative'
            w='250px'
            h='250px'>

            {/* Card*/}
            <Box
                pos='absolute'
                w='100%'
                h='100%'

                // transformStyle='preserve-3d'
                sx={{ transformStyle: 'preserve-3d' }}
                transition='all 0.5s ease'
                _hover={{ transform: 'rotateY(180deg)' }}>

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
                    w='100%'
                    h='100%'
                    sx={{ backfaceVisibility: 'hidden' }}
                    bg='#fafafa'
                    borderRadius='20px 60px'
                    color='#333'
                    justify='center'
                    align='center'
                    transform='rotateY(180deg)'>
                    Back
                </Flex>
            </Box>
        </Box>

    )
}

export default GameCard