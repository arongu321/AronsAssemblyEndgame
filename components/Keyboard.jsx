import LetterKeypad from './LetterKeypad';

export default function Keyboard() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const letterKeypadElements = [...alphabet].map((letter, index) => (
        <LetterKeypad index={index} letter={letter} />
    ));

    return <section className="keyboard">{letterKeypadElements}</section>;
}
