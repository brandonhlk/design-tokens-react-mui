import { parseFontSize } from '../utils/utils';
import { tokens } from 'design-tokens/tokens';
import { alpha, type ThemeOptions } from '@mui/material/styles';
import { violetButtonOverrides } from 'design-tokens/styleOverrides';

const { palette, typography, cc } = tokens;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: cc.ref.palette.cyan['40'],
    },
    secondary: {
      main: cc.ref.palette.grey['70'], //to be updated
    },
    background: {
      default: cc.ref.palette.grey['100'], //to be updated
    },
    success: {
      main: palette.green['40'],  //to be updated
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
          // backgroundColor: cc.sem.colour.action.primary, // not needed at root level
          textTransform: 'capitalize',
          '&:hover': {
            // backgroundColor: cc.sem.colour.action['primary-hovered'], // not needed at root level
          },
          '&:active': {
            // backgroundColor: cc.sem.colour.action['primary-pressed'], // not needed at root level
          },
          '&.Mui-disabled': {
            color: alpha(cc.sem.colour.text.disabled, 0.38),
            backgroundColor: alpha(cc.sem.colour.action.disabled, 0.12), // to include alpha tokens
      
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

          // Custom styles applied on top of existing contained styles above
          ...violetButtonOverrides.contained,
        },
        // example of importing style overrides from design tokens package
        outlined: {
          ...violetButtonOverrides.outlined,
        },
      },
    },
    // MuiTouchRipple: {
    //   styleOverrides: {
    //     root: {
    //       color: palette.green['40'],
    //       opacity: 0.9,
    //     },
    //     child: {
    //       backgroundColor: palette.green['40'],
    //     },
    //   },
    // },
  },
};

export default themeOptions;
