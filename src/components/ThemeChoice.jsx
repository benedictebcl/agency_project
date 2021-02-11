import React, { useContext, useEffect } from "react";
import ThemeContext from '../ThemeContext'

function ThemeChoice(props) {
    const { theme, updateTheme } = useContext(ThemeContext);
  
    useEffect(() => {
      updateTheme(localStorage.getItem("value") || "light");
    }, []);
    
    const handleChange = (event) => {
      const value = event.currentTarget.value;
      localStorage.setItem('value', value);
      updateTheme(value);
    };

    return (
      <select name="theme" value={theme} onChange={handleChange}>
        <option value="dark">Sombre</option>
        <option value="light">Clair</option>
      </select>
    );
  };

export default ThemeChoice;