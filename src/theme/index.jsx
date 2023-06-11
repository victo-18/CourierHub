import PropTypes from "prop-types";
import { useMemo } from "react";

import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";

import palette from "./palette";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
