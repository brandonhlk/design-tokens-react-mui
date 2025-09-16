import { parseFontSize } from '../utils/utils';
import { tokens } from './tokens';
import type { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: tokens.palette.blue[40],
    },
    background: {
      default: tokens.palette.background.primary,
    },
  },
  typography: {
    fontWeightBold: tokens.typography.fontWeight,
    fontSize: parseFontSize(tokens.typography.fontSize),
    fontFamily: tokens.typography.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: tokens.typography.fontWeight,
          fontSize: tokens.typography.fontSize,
          fontFamily: tokens.typography.fontFamily,
          backgroundColor: tokens.button.contained.primary.bg.hover,
          '&:hover': {
            backgroundColor: tokens.extendedPalette.yellow[100],
          },
        },
      },
    },
  },
};

export default themeOptions;
