import React from 'react';
import Button from '@mui/material/Button';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const MUIButton: React.FC<Props> = ({
  children,
  onClick,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  size = 'medium',
}) => (
  <Button variant={variant} color={color} disabled={disabled} size={size} onClick={onClick}>
    {children}
  </Button>
);

export default MUIButton;
