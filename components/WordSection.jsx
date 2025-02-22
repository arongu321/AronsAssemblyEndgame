import LetterSlot from './LetterSlot';
import clsx from 'clsx';

export default function WordSection(props) {
    const letterSlotElements = [...props.currentWord].map((letter, index) => {
        const className = clsx('letter-slot', {
            'not-guessed': !props.guesses.includes(letter) && props.gameLost,
        });
        return (
            <LetterSlot
                index={index}
                letter={
                    (props.guesses.includes(letter) || props.gameLost) && letter
                }
                className={className}
            />
        );
    });
    return <section className="word-section">{letterSlotElements}</section>;
}
