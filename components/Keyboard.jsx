import LetterKeypad from './LetterKeypad';

export default function Keyboard(props) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function pickLetter(letter) {
        props.setGuesses((prevGuesses) =>
            prevGuesses.includes(letter)
                ? prevGuesses
                : [...prevGuesses, letter]
        );
    }

    const letterKeypadElements = [...alphabet].map((letter, index) => (
        <LetterKeypad
            onClick={() => pickLetter(letter)}
            index={index}
            letter={letter}
        />
    ));

    return <section className="keyboard">{letterKeypadElements}</section>;
}
