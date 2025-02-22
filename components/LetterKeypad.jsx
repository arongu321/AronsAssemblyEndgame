export default function LetterKeypad(props) {
    return (
        <button
            onClick={props.onClick}
            key={props.index}
            className={props.className}
            disabled={props.disabled}
        >
            {props.letter}
        </button>
    );
}
