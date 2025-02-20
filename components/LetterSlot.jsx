export default function LetterSlot(props) {
    return (
        <span key={props.index} className="letter-slot">
            {props.letter}
        </span>
    );
}
