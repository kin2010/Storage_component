import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
const BtnCustom = styled.button((props) => ({
  display: 'inline-block',
  cursor: 'pointer',
  textAlign: 'center',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  lineHeight: 'calc(4 / 3)',
  border: '1px solid rgba(0, 0, 0, 0)',
  verticalAlign: 'middle',
  transition: 'color 0.15s',
  fontWeight: '400',
  fontSize: '1.3rem',
  padding: '0.6rem 1.2rem',
  borderRadius: '0.3rem',
  color: `${props.theme.colors.primary}`,
  textDecoration: 'none',
  WebkitTransition: 'color 0.15s',
  ...(!!props.isLoading && {
    opacity: '0.5',
    cursor: 'default',
    backgroundColor: `${props.theme.colors.grayDark}!important`,
  }),
  ':focus': {
    WebkitBoxShadow: ' 0 0 0 0.32rem rgb(67 184 114 / 50%)',
    boxShadow: '0 0 0 0.32rem rgb(67 184 114 / 50%)',
  },
  ':hover': {
    color: `${props.theme.colors.hoverBtn}`,
  },
  ...(props.variant === 'container' && {
    color: `${props.theme.colors.white}`,
    backgroundColor: `${props.theme.colors.primary}`,
    border: `${props.theme.colors.primary}`,
    textTransform: 'uppercase',
    fontSize: '16px',
    borderRadius: '1rem',
    padding: '2rem 4.8rem',
    fontWeight: '700',
    ':hover,:not(:disabled):active': {
      borderColor: `${props.theme.colors.activeBtn}`,
      backgroundColor: `${props.theme.colors.activeBtn}`,
      color: `${props.theme.colors.white}`,
    },
  }),
  ...(props.variant === 'outline' && {
    backgroundColor: `${props.theme.colors.white}`,
    border: `1px solid ${props.theme.colors.primary}`,
    color: `${props.theme.colors.primary}`,
    ':hover': {
      color: `${props.theme.colors.white}`,
      backgroundColor: `${props.theme.colors.primary}`,
    },
  }),
  ...(props.size === 'small' && {
    fontSize: '13px',
    borderRadius: ' 0.3rem',
    textTransform: 'initial',
  }),
  ...(props.size === 'medium' && {
    fontSize: '14px',
    borderRadius: '1px',
  }),
  ...(props.size === 'large' && {
    fontSize: '1.6rem',
    borderRadius: '1rem',
  }),
  ...(props.fullWidth && {
    display: 'block',
    width: '100%',
  }),
  ...(props.size === 'small' &&
    props.variant === 'container' && {
      fontWeight: 'bold',
      borderColor: `${props.theme.colors.smallBtn}`,
      backgroundColor: `${props.theme.colors.smallBtn}`,
      padding: '0.8rem 2rem 0.8rem 2rem !important',
      ':active': {
        borderColor: `${props.theme.colors.smallActiveBtn}`,
        backgroundColor: `${props.theme.colors.smallActiveBtn}`,
      },
    }),
}));
const Button = forwardRef(
  ({ children, variant, isLoading, size, fullWidth, ...rest }, ref) => {
    return (
      <BtnCustom
        ref={ref}
        {...rest}
        size={size || 'medium'}
        fullWidth={fullWidth}
        variant={variant}
        isLoading={isLoading}
        disabled={isLoading}
      >
        {children}
      </BtnCustom>
    );
  },
);
export default Button;
