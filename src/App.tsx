import './App.css';
import themeOptions from './theme/themeOptions';
import { ghostButtonStyle, dangerButtonStyle } from 'design-tokens/customThemes';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import Chip from '@mui/material/Chip';

function App() {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <>
        <h2>Design Tokens Prototype</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* Normal Accordion - 1. No style override */}
          {/* <Accordion>
            <div style={{ padding: 16 }}>
              <strong>Accordion Content</strong>
              <p>No style override</p>
            </div>
          </Accordion> */}

          <br />

          {/* Button - 2. Override through ThemeProvider */}
          <Button variant="contained" onClick={() => {}}>
            normal
          </Button>

          <Button variant="contained" onClick={() => {}} disabled>
            disabled
          </Button>

          <br />

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

          <br />

          {/* Custom Buttons - 4a. Import styles from elsewhere in sx */}
          <Button variant="outlined" color="primary" sx={ghostButtonStyle}>
            GHOST (Import styles)
          </Button>

          <Button variant="outlined" color="primary" sx={dangerButtonStyle}>
            DANGER (Import styles)
          </Button>

          <br />

          {/* Custom Violet Button - 5a. Modify color to violet (pass in custom color - requires extending types) */}
          <Button variant="outlined" color="violet">
            VIOLET Outlined (modify color)
          </Button>
          <Button variant="contained" color="violet">
            VIOLET Contained (modify color)
          </Button>

          <br />

          {/* Chip - 5b. Modify color (pass in custom color - requires extending types) */}
          <Chip label="Chip Color Primary" color="primary" variant="outlined" clickable />
          <Chip label="Chip Color Violet" color="violet" variant="outlined" clickable />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
