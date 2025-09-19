import './App.css';
import themeOptions from './theme/themeOptions';
import { ghostStyles } from 'design-tokens/customThemes';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';

function App() {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <>
        <h2>Design Tokens Prototype</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* Normal Accordion - 1. No style override */}
          <Accordion>
            <div style={{ padding: 16 }}>
              <strong>Accordion Content</strong>
              <p>No style override</p>
            </div>
          </Accordion>

          <br />

          {/* Button - 2. Override through ThemeProvider */}
          <Button variant="contained" onClick={() => {}}>
            normal
          </Button>

          <Button variant="contained" onClick={() => {}} disabled>
            disabled
          </Button>

          {/* Danger Button - 3. Manual style override (BAD) */}
          <Button
            variant="outlined"
            color="error"
            sx={{
              color: '#d32f2f',
              backgroundColor: '#e39ba6ff',
              boxShadow: 'none',
              border: '1px solid #d32f2f',
              '&:hover': {
                backgroundColor: '#ffcdd2',
                color: '#b71c1c',
                border: '1px solid #b71c1c',
                boxShadow: 'none',
              },
              '&:disabled': {
                color: '#f44336',
                backgroundColor: '#ffebee',
                border: '1px solid #f44336',
              },
            }}
          >
            danger (Manual using sx)
          </Button>

          {/* Ghost Button - 4. Import styles from elsewhere */}
          <Button variant="outlined" color="primary" sx={ghostStyles}>
            ghost (Import styles)
          </Button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
