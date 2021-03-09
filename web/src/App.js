import { React, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardDisplay from "./components/CardDisplay";
import Title from "./components/Title";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Footer from "./components/Footer";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const themeLight = createMuiTheme({
    palette: {
      background: {
        default: darkmode ? "#121212" : "#FAFAFA",
      },
    },
  });
  function handleclick() {
    setDarkmode(!darkmode);
    localStorage.setItem("darkmode", darkmode);
  }

  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline>
        <Title darkmode={darkmode} onChange={() => handleclick()} />
        <CardDisplay darkmode={darkmode} />
        <Footer darkmode={darkmode} />
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
