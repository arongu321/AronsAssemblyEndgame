export default function Language(props) {
    return (
        <span
            key={props.language.name}
            style={props.styles}
            className={props.className}
        >
            {props.language.name}
        </span>
    );
}
