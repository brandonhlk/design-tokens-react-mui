import { parseFontSize } from '../utils/utils';
import { tokens } from 'design-tokens/tokens';
import type { ThemeOptions } from '@mui/material/styles';
import { violetButtonOverrides } from 'design-tokens/styleOverrides';

const { palette, typography, cc } = tokens;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: palette.yellow['70'],
    },
    background: {
      default: palette.yellow['80'],
    },
    success: {
      main: palette.green['40'],
    },
    // Custom palette field. Type needs to be added under PaletteOptions in `mui-component-override.d.ts`
    violet: {
      main: cc.ref.palette.violet['40'],
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
          color: cc.sem.colour.text.inverse,
          backgroundColor: cc.sem.colour.action.primary,
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: cc.sem.colour.action['primary-hovered'],
          },
          '&:active': {
            backgroundColor: cc.sem.colour.action['primary-pressed'],
          },
          '&.Mui-disabled': {
            color: cc.sem.colour.text.disabled,
            backgroundColor: cc.sem.colour.action.disabled,
            opacity: 1,
            fontWeight: typography.fontWeight,
          },
        },
        contained: {
          backgroundColor: cc.sem.colour.action.primary,
          color: cc.sem.colour.text.inverse,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: cc.sem.colour.action['primary-hovered'],
            boxShadow: 'none',
          },
          '&:active': {
            backgroundColor: cc.sem.colour.action['primary-pressed'],
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: cc.sem.colour.action.disabled,
            color: cc.sem.colour.text.disabled,
            boxShadow: 'none',
          },
          // Custom styles applied on top of existing contained styles above
          ...violetButtonOverrides.contained,
        },
        // example of importing style overrides from design tokens package
        outlined: {
          ...violetButtonOverrides.outlined,
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          color: palette.green['40'],
          opacity: 0.9,
        },
        child: {
          backgroundColor: palette.green['40'],
        },
      },
    },
  },
};

export default themeOptions;
