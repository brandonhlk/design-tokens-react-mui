import { parseFontSize } from '../utils/utils';
import { tokens } from 'design-tokens/tokens';
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
          '&.Mui-disabled': {
            color: '#948a8aff',
            backgroundColor: '#4d4d4dff',
            opacity: 1,
            fontWeight: typography.fontWeight,
          },
          textTransform: 'capitalize', // Only first letter uppercase
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          color: '#982596ff',
          opacity: 0.9,
        },
        child: {
          backgroundColor: '#ff9800',
        },
      },
    },
  },
};

export default themeOptions;
