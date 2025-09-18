import { tokens } from './tokens';

export const ghostStyles = {
  color: tokens.button.ghost.color,
  backgroundColor: tokens.button.ghost.background,
  boxShadow: 'none',
  border: 'none',
  '&:hover': {
    backgroundColor: tokens.button.ghost['&:hover'].background,
    color: tokens.button.ghost['&:hover'].color,
    boxShadow: 'none',
    border: 'none',
  },
  '&:disabled': {
    color: tokens.button.ghost['&:disabled'].color,
  },
};
