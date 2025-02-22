import clsx from 'clsx';
import { languages } from '../languages';
import { getFarewellText } from '../utils';

export default function GameStatus(props) {
    const gameStatusClasses = clsx('game-status', {
        won: props.gameWon,
        lost: props.gameLost,
        farewell: !props.gameOver && props.lastGuessIncorrect,
    });

    function renderGameStatus() {
        if (!props.gameOver && props.lastGuessIncorrect) {
            return (
                <p className="farewell-message">
                    {getFarewellText(languages[props.wrongGuessCount - 1].name)}
                </p>
            );
        }

        if (props.gameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            );
        }
        if (props.gameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            );
        }

        return null;
    }

    return (
        <section className={gameStatusClasses}>{renderGameStatus()}</section>
    );
}
