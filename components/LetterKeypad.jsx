export default function LetterKeypad(props) {
    return (
        <button key={props.index} className="letter-keypad">
            {props.letter}
        </button>
    );
}
