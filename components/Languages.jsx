import { languages } from '../languages.js';

export default function Languages() {
    const languageElements = languages.map((language) => {
        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color,
        };
        return (
            <span key={language.name} style={styles} className="language">
                {language.name}
            </span>
        );
    });
    return <section className="languages">{languageElements}</section>;
}
