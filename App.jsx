import React from 'react';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import Languages from './components/Languages';
import WordSection from './components/WordSection';
import Keyboard from './components/Keyboard';
import NewGameButton from './components/NewGameButton';
import WordScreenReader from './components/WordScreenReader';
import { languages } from './languages';

export default function AssemblyEndgame() {
    // State variables
    const [word, setWord] = React.useState('react');
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
            <Header />
            <GameStatus
                gameWon={isGameWon}
                gameLost={isGameLost}
                gameOver={isGameOver}
                lastGuessIncorrect={isLastGuessIncorrect}
                wrongGuessCount={wrongGuessCount}
            />
            <Languages wrongGuessCount={wrongGuessCount} />
            <WordSection currentWord={word} guesses={userGuesses} />
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
            {isGameOver && <NewGameButton />}
        </main>
    );
}
