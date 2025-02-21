import LetterSlot from './LetterSlot';

export default function WordSection(props) {
    const letterSlotElements = [...props.currentWord].map((letter, index) => (
        <LetterSlot
            index={index}
            letter={
                props.guesses.includes(letter) &&
                props.currentWord.includes(letter) &&
                letter
            }
        />
    ));
    return <section className="word-section">{letterSlotElements}</section>;
}
