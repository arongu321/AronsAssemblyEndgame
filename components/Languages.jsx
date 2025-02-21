import { languages } from '../languages.js';
import clsx from 'clsx';
import Language from './Language.jsx';

export default function Languages(props) {
    const languageElements = languages.map((language, index) => {
        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color,
        };
        const className = clsx('language', {
            'lost': index < props.wrongGuessCount,
        });
        return (
            <Language
                language={language}
                styles={styles}
                className={className}
            />
        );
    });
    return <section className="languages">{languageElements}</section>;
}
