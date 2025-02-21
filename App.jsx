import React from 'react';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import Languages from './components/Languages';
import WordSection from './components/WordSection';
import Keyboard from './components/Keyboard';
import NewGameButton from './components/NewGameButton';

export default function AssemblyEndgame() {
    const [word, setWord] = React.useState('react');
    const [userGuesses, setUserGuesses] = React.useState([]);
    console.log(userGuesses);
    return (
        <main>
            <Header />
            <GameStatus />
            <Languages />
            <WordSection word={word} />
            <Keyboard
                currentWord={word}
                guesses={userGuesses}
                setGuesses={setUserGuesses}
            />
            <NewGameButton />
        </main>
    );
}
