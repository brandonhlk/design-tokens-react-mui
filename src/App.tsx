import themeOptions from './theme/themeOptions';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

function App() {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h2>Design Tokens Prototype</h2>

        <Button variant="contained" color="primary" onClick={() => {}}>
          TEXT
        </Button>
      </>
    </ThemeProvider>
  );
}

export default App;
