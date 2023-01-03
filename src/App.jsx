import "./App.css";
import { Box } from "./components/box";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Box />
      </div>
    </ThemeProvider>
  );
}

export default App;
