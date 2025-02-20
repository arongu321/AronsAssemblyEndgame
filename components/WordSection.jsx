import LetterSlot from './LetterSlot';

export default function WordSection(props) {
    const letterSlotElements = [...props.word].map((letter, index) => (
        <LetterSlot index={index} letter={letter} />
    ));
    return <section className="word-section">{letterSlotElements}</section>;
}
