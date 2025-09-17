import { parseFontSize } from '../utils/utils';
import { tokens } from './tokens';
import type { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: tokens.palette.blue['40'],
    },
    background: {
      default: tokens.palette.blue['40'],
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
          fontSize: parseFontSize(tokens.typography.fontSize),
          fontFamily: tokens.typography.fontFamily,
          backgroundColor: tokens.palette.blue['40'],
          '&:hover': {
            backgroundColor: tokens.palette.yellow['100'],
          },
        },
      },
    },
  },
};

export default themeOptions;
