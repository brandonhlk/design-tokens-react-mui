import { parseFontSize } from '../utils/utils';
import { tokens } from './tokens';
import type { ThemeOptions } from '@mui/material/styles';

const { palette, typography } = tokens;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: palette.yellow['70'],
    },
    background: {
      default: palette.yellow['80'],
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
          color: palette.green['40'],
          backgroundColor: palette.green['20'],
        },
      },
    },
  },
};

export default themeOptions;
