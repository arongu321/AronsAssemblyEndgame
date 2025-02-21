import { languages } from '../languages.js';
import clsx from 'clsx';

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
            <span key={language.name} style={styles} className={className}>
                {language.name}
            </span>
        );
    });
    return <section className="languages">{languageElements}</section>;
}
