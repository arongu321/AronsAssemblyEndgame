import LetterKeypad from './LetterKeypad';
import clsx from 'clsx';

export default function Keyboard(props) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function pickLetter(letter) {
        props.setGuesses((prevGuesses) =>
            prevGuesses.includes(letter)
                ? prevGuesses
                : [...prevGuesses, letter]
        );
    }

    const letterKeypadElements = [...alphabet].map((letter, index) => {
        const className = clsx('letter-keypad', {
            'right-guess':
                props.currentWord.includes(letter) &&
                props.guesses.includes(letter),
            'wrong-guess':
                !props.currentWord.includes(letter) &&
                props.guesses.includes(letter),
        });
        return (
            <LetterKeypad
                className={className}
                onClick={() => pickLetter(letter)}
                index={index}
                letter={letter}
            />
        );
    });

    return <section className="keyboard">{letterKeypadElements}</section>;
}
