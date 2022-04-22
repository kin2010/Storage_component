import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
const Typography = forwardRef(
  ({ component, variant, align, children }, ref) => {
    const TyporaphyCustom = styled(
      `${component ? component : variant !== 'h4_primary' ? variant : 'h4'}`,
    )`
      text-align: ${(props) => props.align};
      ${(props) =>
        props.variant === 'h1' &&
        `font-size: 56px;
        line-height: 1.17857143;
        text-transform: uppercase;
        font-weight: 700;
        color:${props.theme.colors.dark}`}
      ${(props) =>
        props.variant === 'h2' &&
        `font-size: 48px;
        line-height: 1.16666667;
        text-transform: uppercase;
        color:${props.theme.colors.dark}`};
      ${(props) =>
        props.variant === 'h3' &&
        `font-size: 30px;
        line-height: 1.33333333;
        font-weight: 700;
        color:${props.theme.colors.dark}`};
      ${(props) =>
        props.variant === 'h4' &&
        `font-size: 20px  ;
        font-weight: 700;
        line-height: 1.5;
        color:${props.theme.colors.dark}`};
      ${(props) =>
        props.variant === 'h4_primary' &&
        `
          font-size: 16px;
          line-height: normal;
          font-weight: 700;
          color:${props.theme.colors.primary}`};
      ${(props) =>
        props.variant === 'h5' &&
        ` color: ${props.theme.colors.success};
        font-size: 16px;
        line-height: normal;
        font-weight: 700;`}
      ${(props) =>
        props.variant === 'h6' &&
        `font-size: 14px;
        font-weight: 500;
        color:${props.theme.colors.dark}`};
      ${(props) =>
        props.variant === 'span' &&
        `font-family: 'Farsan', sans-serif;
        font-size: 24px;
        line-height: 0.91666667;
        font-weight: 300;
        color:${props.theme.colors.textColor}`};
      ${(props) =>
        props.variant === 'p' &&
        ` font-size: 20px;
        line-height: 1.5;
        font-weight: 300; 
        color:${props.theme.colors.textColor}`};
    `;
    return (
      <TyporaphyCustom
        ref={ref}
        component={component}
        align={align}
        variant={variant}
      >
        {children}
      </TyporaphyCustom>
    );
  },
);
Typography.defaultProps = {
  component: null,
  variant: 'h2',
};
export default React.memo(Typography);
