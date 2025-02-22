export default function LetterKeypad(props) {
    return (
        <button
            onClick={props.onClick}
            key={props.index}
            className={props.className}
            disabled={props.disabled}
            aria-disabled={props.guesses.includes(props.letter)}
            aria-label={`Letter ${props.letter}`}
        >
            {props.letter}
        </button>
    );
}
