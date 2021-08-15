import { createTheme, ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { useAppSelector } from '../store/hook';
import { appColors, darkModeColors } from './color';

const CustomThemeProvider: FC = ({ children }) => {
  const darkMode = useAppSelector((store) => store.darkMode);
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary,
      },
    },
    background: darkMode ? darkModeColors.background : appColors.background,
    font: darkMode ? darkModeColors.font : appColors.font,
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;

declare module '@material-ui/core/styles' {
  interface Theme {
    background: string;
    font: string;
  }
  interface ThemeOptions {
    background: string;
    font: string;
  }
}
