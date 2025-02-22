export default function LetterSlot(props) {
    return (
        <span key={props.index} className={props.className}>
            {props.letter}
        </span>
    );
}
