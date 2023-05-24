import { Button } from '@chakra-ui/react';
import useSound from 'use-sound';

const ButtonClick = ({ w = '200px', bg = 'orange.500', _hoverbg = 'orange.400', label }) => {
    const [play] = useSound('/sounds/button-click.mp3');

    return (
        <Button w={w} bg={bg} _hover={{ bg: _hoverbg }} onClick={play}>{label}</Button>
    )
}

export default ButtonClick;