import { FC } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from "../styles/themes/default";

const Provider:FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
}


export default Provider