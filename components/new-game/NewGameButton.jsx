import { getRandomWord } from '../../utils';

export default function NewGameButton(props) {
    function generateNewWord() {
        props.setWord(() => getRandomWord());
        props.setGuesses([]);
    }
    return (
        <button onClick={generateNewWord} className="new-game">
            New Game
        </button>
    );
}
