export default function WordScreenReader(props) {
    return (
        <section className="sr-only" aria-live="polite" role="status">
            <p>
                {props.currentWord.includes(props.lastGuess)
                    ? `Correct! The letter ${props.lastGuess} is in the word.`
                    : `Sorry, the letter ${props.lastGuess} is not in the word.`}
                You have {props.guessesLeft} attempts left.
            </p>
            <p>
                Current word:{' '}
                {props.currentWord
                    .split('')
                    .map((letter) =>
                        props.guesses.includes(letter) ? letter + '.' : 'blank.'
                    )
                    .join(' ')}
            </p>
        </section>
    );
}
