import { useState } from 'react';
import themeOptions from './theme/themeOptions';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0);
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
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <Button variant="contained" color="primary" onClick={() => {}}>
          TEXT
        </Button>
      </>
    </ThemeProvider>
  );
}

export default App;
