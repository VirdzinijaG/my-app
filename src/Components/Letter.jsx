import { useContext } from "react";
import { ThemeContext } from "./App";


function Letter({ letter }) {
    const theme = useContext(ThemeContext);
    return (
        <span style={theme}>{letter}</span>
    )
}

export default Letter;