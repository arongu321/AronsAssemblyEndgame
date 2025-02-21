import React from 'react';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import Languages from './components/Languages';
import WordSection from './components/WordSection';
import Keyboard from './components/Keyboard';
import NewGameButton from './components/NewGameButton';

export default function AssemblyEndgame() {
    // State variables
    const [word, setWord] = React.useState('react');
    const [userGuesses, setUserGuesses] = React.useState([]);

    // Derived state variables
    const wrongGuessCount = userGuesses.filter(
        (letter) => !word.includes(letter)
    ).length;

    return (
        <main>
            <Header />
            <GameStatus />
            <Languages wrongGuessCount={wrongGuessCount} />
            <WordSection currentWord={word} guesses={userGuesses} />
            <Keyboard
                currentWord={word}
                guesses={userGuesses}
                setGuesses={setUserGuesses}
            />
            <NewGameButton />
        </main>
    );
}
