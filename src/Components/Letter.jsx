import { useContext } from "react";
import { ThemeContext, ThemeSelect } from "../Providers/index";


function Letter({ letter }) {
    const theme = useContext(ThemeContext);
    const ts = useContext(ThemeSelect);
    return (
        <span style={theme[ts]}>{letter}</span>
    )
}

export default Letter;