import { Button } from '@chakra-ui/react';
import useSound from 'use-sound';

const ButtonClick = ({ w = '200px', bg = 'orange.500', _hoverbg = 'orange.400', label, onClick }) => {
    const [play] = useSound('/sounds/button-click.mp3');
    const onButtonClick = () => {
        play();
        if (onClick) onClick();
    }

    return (
        <Button w={w} bg={bg} _hover={{ bg: _hoverbg }} onClick={onButtonClick} color='white'>{label}</Button>
    )
}

export default ButtonClick;