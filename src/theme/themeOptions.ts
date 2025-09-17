import { parseFontSize } from '../utils/utils';
import { tokens } from './tokens';
import type { ThemeOptions } from '@mui/material/styles';

const { palette, typography, ts } = tokens;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: palette.blue['40'],
    },
    background: {
      default: palette.blue['40'],
    },
  },
  typography: {
    fontWeightBold: typography.fontWeight,
    fontSize: parseFontSize(typography.fontSize),
    fontFamily: typography.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: typography.fontWeight,
          fontSize: parseFontSize(typography.fontSize),
          fontFamily: typography.fontFamily,
          backgroundColor: ts.sem.colour.primary.main,
          '&:hover': {
            backgroundColor: palette.yellow['100'],
          },
        },
      },
    },
  },
};

export default themeOptions;
