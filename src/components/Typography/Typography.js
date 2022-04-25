import React, { forwardRef } from 'react';
import { StyledTypography } from './styled';
import { theme } from 'App';
import PropTypes from 'prop-types';

const Typography = forwardRef(
  ({ component, variant, color, align, children }, ref) => {
    return (
      <StyledTypography ref={ref} align={align} color={color} variant={variant}>
        {children}
      </StyledTypography>
    );
  },
);
Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'h4Primary',
  ]),
  color: PropTypes.string,
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
};
Typography.defaultProps = {
  variant: 'h1',
  // color: `${theme.colors.dark}`,
  color: '#203259',
  align: 'left',
};
export default React.memo(Typography);
