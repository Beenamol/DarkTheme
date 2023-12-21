import { Paper } from "@material-ui/core";
import "./App.css";
import ButtonAppBar from "./AppBar";
import SimpleCard from "./Card";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "250vh" }}>
        <div className="App">
          <ButtonAppBar
            check={darkMode}
            change={() => setDarkMode(!darkMode)}
          />

          <h1>Vachan Online</h1>
          <SimpleCard />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
