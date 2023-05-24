import { useReducer, useEffect } from 'react';
import { Stack, Flex, Heading, Progress, Text, Box } from '@chakra-ui/react';
import useSound from 'use-sound';


import { ButtonClick, GameCard } from '@/components';
import aboutMeData from '@/data/about-me-data';

const screenType = {
    instructions: 'instructions',
    game: 'game',
};

const initialState = {
    screen: screenType.instructions,
    questionIndex: 0,
    userChoice: '',
    mode: 'select',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SCREEN':
            return { ...state, screen: action.payload }
        case 'SET_QUESTION_INDEX':
            return { ...state, questionIndex: action.payload }
        case 'SET_USER_CHOICE':
            return { ...state, userChoice: action.payload }
        case 'SET_MODE':
            return { ...state, mode: action.payload }
        case 'SET_PROGRESS':
            return { ...state, progress: action.payload }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Instruction = ({ dispatch }) => {
    return (
        <>
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
                <ButtonClick label='Start Game' onClick={() => dispatch({ type: 'SET_SCREEN', payload: screenType.game })} />
            </Stack>
        </>
    )
};

const Game = ({ state, dispatch }) => {
    const question = aboutMeData[state.questionIndex];
    const cards = question.statements.map((statement, i) => {
        return <GameCard
            key={statement}
            delay={i + 0.5}
            statement={statement}
            answer={question.answer}
            state={state}
            dispatch={dispatch}
        />
    });

    return (
        <>
            <Flex gap={10} flexWrap='wrap' justify='center' flexDir={{ base: 'column', md: 'row' }}>
                {cards}
            </Flex>
        </>
    )
}

const RevealPapeGame = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [wrongAnswerplay] = useSound('/sounds/wrong-answer.mp3');
    const [correctAnswerplay] = useSound('/sounds/correct-answer.mp3');

    useEffect(() => {
        if (state.mode === 'select') return;
        if (state.userChoice.length && state.userChoice !== aboutMeData[state.questionIndex].answer) {
            wrongAnswerplay();
        } else if (state.userChoice.length && state.userChoice === aboutMeData[state.questionIndex].answer) {
            correctAnswerplay();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wrongAnswerplay, state.mode, state.userChoice]);


    const onNextQuestion = () => {
        if (state.questionIndex === aboutMeData.length - 1) {
            dispatch({ type: 'RESET' });
            return;
        }
        dispatch({ type: 'SET_QUESTION_INDEX', payload: state.questionIndex + 1 });
        dispatch({ type: 'SET_MODE', payload: 'select' });
        dispatch({ type: 'SET_PROGRESS', payload: ((state.questionIndex + 1) / aboutMeData.length) * 100 })
    };

    return (
        <Box py="30px">
            {state.screen === screenType.game &&
                <Stack>
                    <Progress size="md" value={state.progress} hasStripe colorScheme='orange' borderRadius='15px' />
                    <Flex justify='space-between'>
                        <Text>0%</Text>
                        <Text>100%</Text>
                    </Flex>
                </Stack>
            }
            <Stack align='center' pt={10} spacing={6}>
                {state.screen === screenType.game &&
                    <Flex>
                        <Heading size='lg' color='orange.500'>{aboutMeData[state.questionIndex].category}</Heading>
                    </Flex>}
                {state.screen === screenType.instructions &&
                    <Instruction
                        dispatch={dispatch} />
                }
                {state.screen === screenType.game &&
                    <Game
                        state={state}
                        dispatch={dispatch} />
                }
                {state.screen === screenType.game && state.mode === 'learn' && <>
                    <Text>{aboutMeData[state.questionIndex].explanation}</Text>
                    <ButtonClick label='Next' onClick={onNextQuestion} /></>}
            </Stack>
        </Box>
    )
}

export default RevealPapeGame;