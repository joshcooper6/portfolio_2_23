import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Nav() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <nav
        className={`border w-full min-h-[40px] flex p-2 items-center mb-4 ${theme.txt}`}
      >
        <button onClick={() => toggleTheme()}>Toggle hoe</button>
      </nav>
    );
}