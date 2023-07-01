import React from "react";
import ReactDOM from "react-dom/client";
import { ButtonText, ButtonOutlined, ThemeSwitcher, useStoreTheme } from "libs";
import { Overview } from "mfe1/Overview";
import { Paper, ThemeProvider, createTheme } from "@mui/material";

//
const App = () => {
  const thememode = useStoreTheme((state) => state.thememode);
  const theme = createTheme({
    palette: {
      mode: thememode,
      primary: {
        main: "#00FFFF",
      },
    },
  });

  //
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div>Hosts</div>

        <div>
          <ButtonText>Host Text build</ButtonText>
          <ButtonOutlined>Host Outlined build</ButtonOutlined>
          {thememode} <ThemeSwitcher />
        </div>

        <hr />

        <div>
          <div>mfe1</div>
          <div>
            <Overview />
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

//
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
