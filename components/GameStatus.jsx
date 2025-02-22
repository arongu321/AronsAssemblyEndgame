import clsx from 'clsx';

export default function GameStatus(props) {
    const gameStatusClasses = clsx('game-status', {
        won: props.gameWon,
        lost: props.gameLost,
    });
    return (
        <section className={gameStatusClasses}>
            {props.gameOver ? (
                props.gameWon ? (
                    <>
                        <h2>You win!</h2>
                        <p>Well done! 🎉</p>
                    </>
                ) : (
                    <>
                        <h2>Game over!</h2>
                        <p>You lose! Better start learning Assembly 😭</p>
                    </>
                )
            ) : null}
        </section>
    );
}
