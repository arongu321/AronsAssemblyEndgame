import React from 'react';
import Header from './components/Header';
import GameStatus from './components/GameStatus';
import Languages from './components/Languages';

export default function AssemblyEndgame() {
    return (
        <main>
            <Header />
            <GameStatus />
            <Languages />
        </main>
    );
}
