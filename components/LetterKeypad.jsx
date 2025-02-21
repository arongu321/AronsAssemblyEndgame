export default function LetterKeypad(props) {
    return (
        <button
            onClick={props.onClick}
            key={props.index}
            className="letter-keypad"
        >
            {props.letter}
        </button>
    );
}
