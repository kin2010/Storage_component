import React from 'react';

export interface ButtonProps {
  color: 'success' | 'danger' | 'info' | 'warning';
  variant: 'container' | 'outlined';
  size: 'small' | 'medium' | 'large';
}

declare class Button extends React.Component<ButtonProps> {}

export default Button;
