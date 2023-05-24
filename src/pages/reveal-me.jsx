import { useState } from 'react';
import { Stack, Flex, Heading, Text } from '@chakra-ui/react';

import { ButtonClick, GameCard } from '@/components';

const screen = {
    instructions: 'instructions',
    game: 'game',
};

const Instruction = ({ setCurrentScreen }) => {
    return (
        <Stack gap={10} align='center'>
            <Flex gap={2} flexDir={{ base: 'column', lg: 'row' }} align='center'>
                <Heading size='lg'>Welcome To</Heading>
                <Heading size='lg' color='orange.500'><i>Reveal the Real Pape</i> 👻</Heading>
            </Flex>
            <Text align='center'>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to using Content here,
                content making it look like readable English. Many desktop publishing packages and
                web page editors now use Lorem Ipsum as their default model text, and a search for lorem
                will uncover many web sites still in their infancy. Various versions have evolved
                over the years, sometimes by accident, sometimes on purpose.
            </Text>
            <ButtonClick label='Start Game' onClick={() => setCurrentScreen(screen.game)} />
        </Stack>
    )
};

const Game = () => {
    return (
        <>
            <Text>Game</Text>
            <Flex gap={10} flexWrap='wrap' justify='center' flexDir={{ base: 'column', md: 'row' }}>
                <GameCard />
                <GameCard />
                <GameCard />
            </Flex>
        </>
    )
}

const RevealPapeGame = () => {
    const [currentScreen, setCurrentScreen] = useState(screen.instructions);

    return (
        <Stack align='center' pt={10} spacing={6}>
            {currentScreen === screen.instructions && <Instruction setCurrentScreen={setCurrentScreen} />}
            {currentScreen === screen.game && <Game setCurrentScreen={setCurrentScreen} />}
        </Stack>
    )
}

export default RevealPapeGame;