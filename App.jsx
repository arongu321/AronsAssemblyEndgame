import React from 'react';
import Header from './components/header/Header';
import GameStatus from './components/game-status/GameStatus';
import Languages from './components/languages/Languages';
import WordSection from './components/word-section/WordSection';
import Keyboard from './components/keyboard/Keyboard';
import NewGameButton from './components/new-game/NewGameButton';
import WordScreenReader from './components/word-section/WordScreenReader';
import ReactConfetti from 'react-confetti';
import { languages } from './languages';
import { getRandomWord } from './utils';

export default function AssemblyEndgame() {
    // State variables
    const [word, setWord] = React.useState(() => getRandomWord());
    const [userGuesses, setUserGuesses] = React.useState([]);

    // Derived state variables
    const wrongGuessCount = userGuesses.filter(
        (letter) => !word.includes(letter)
    ).length;

    const numGuessesLeft = languages.length - wrongGuessCount;

    const isGameWon = word
        .split('')
        .every((letter) => userGuesses.includes(letter));
    const isGameLost = wrongGuessCount >= languages.length - 1;
    const isGameOver = isGameWon || isGameLost;
    const lastGuessedLetter = userGuesses[userGuesses.length - 1];
    const isLastGuessIncorrect =
        lastGuessedLetter && !word.includes(lastGuessedLetter);

    return (
        <main>
            {isGameWon && <ReactConfetti />}
            <Header />
            <GameStatus
                gameWon={isGameWon}
                gameLost={isGameLost}
                gameOver={isGameOver}
                lastGuessIncorrect={isLastGuessIncorrect}
                wrongGuessCount={wrongGuessCount}
            />
            <Languages wrongGuessCount={wrongGuessCount} />
            <WordSection
                currentWord={word}
                guesses={userGuesses}
                gameLost={isGameLost}
            />
            <WordScreenReader
                lastGuess={lastGuessedLetter}
                guessesLeft={numGuessesLeft}
                currentWord={word}
                guesses={userGuesses}
            />
            <Keyboard
                currentWord={word}
                guesses={userGuesses}
                setGuesses={setUserGuesses}
                gameOver={isGameOver}
            />
            {isGameOver && (
                <NewGameButton setWord={setWord} setGuesses={setUserGuesses} />
            )}
        </main>
    );
}
