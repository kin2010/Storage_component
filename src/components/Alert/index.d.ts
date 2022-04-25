import React from 'react';
export interface AlertProps {
  severity: 'success' | 'error' | 'info' | 'warning';
  variant: 'outlined' | 'filled';
}
declare class Alert extends React.Component<AlertProps> {}
export default Alert;
