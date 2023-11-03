import React, { useContext, useEffect, useState } from 'react';
import { light } from '../../components/styles/Theme.styled';
    // import styled, { ThemeProvider } from 'styled-components';

const ThemeContext =  React.createContext()

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProviders = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(light);

  const toggleTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  const value = { currentTheme, setCurrentTheme, toggleTheme }
  return (
    <ThemeContext.Provider value={value}>
        {children}
  </ThemeContext.Provider>
  );
};