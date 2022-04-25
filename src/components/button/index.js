import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';
const Button = forwardRef(
  ({ children, variant, isLoading, size, fullWidth, color, ...rest }, ref) => {
    return (
      <StyledButton
        ref={ref}
        {...rest}
        size={size || 'medium'}
        fullWidth={fullWidth}
        variant={variant}
        isLoading={isLoading}
        color={color}
        disabled={isLoading}
      >
        {children}
      </StyledButton>
    );
  },
);
Button.propTypes = {
  color: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['container', 'outlined']),
  isLoading: PropTypes.bool,
};
Button.defaultProps = {
  color: 'success',
  size: 'medium',
};
export default Button;
