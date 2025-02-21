import React from 'react';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import Languages from './components/Languages';
import WordSection from './components/WordSection';
import Keyboard from './components/Keyboard';
import NewGameButton from './components/NewGameButton';

export default function AssemblyEndgame() {
    const [word, setWord] = React.useState('react');

    return (
        <main>
            <Header />
            <GameStatus />
            <Languages />
            <WordSection word={word} />
            <Keyboard />
            <NewGameButton />
        </main>
    );
}
