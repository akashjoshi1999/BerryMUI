import "./App.css";
import Header from "./components/Header/Header";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Header />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
