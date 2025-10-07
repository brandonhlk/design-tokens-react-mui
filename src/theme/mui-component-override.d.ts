import '@mui/material/Button';

declare module '@mui/material/styles' {
  interface Palette {
    violet: PaletteColor;
    danger: PaletteColor;
    // Add more custom colors as needed
  }
  interface PaletteOptions {
    violet?: PaletteColorOptions;
    danger?: PaletteColorOptions;
    // Add more custom colors as needed
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    violet: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    violet: true;
  }
}
