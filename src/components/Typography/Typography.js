import React, { forwardRef } from 'react';

import styled from '@emotion/styled';
const H1 = styled.h1((props) => ({
  fontSize: '3.5rem',
  lineHeight: '1.17857143',
  textTransform: 'uppercase',
  fontWeight: '700',
  color: `${props.theme.colors.dark}`,
}));
const H2 = styled.h2((props) => ({
  fontSize: '3rem',
  lineHeight: ' 1.16666667',
  textTransform: 'uppercase',
  color: `${props.theme.colors.dark}`,
}));

const H3 = styled.h2((props) => ({
  fontSize: '1.875rem',
  lineHeight: '1.33333333',
  fontWeight: '700',
  color: `${props.theme.colors.dark}`,
}));
const RenderTy = ({ className, component, variant, children, ...rest }) => {
  let RenderComponent = component !== null ? `${component}` : `${variant}`;
  if (RenderComponent === 'h4_subtitle') {
    RenderComponent = 'h4';
  }
  return (
    <RenderComponent className={className} {...rest}>
      {children}
    </RenderComponent>
  );
};
const TyporaphyCustom = styled(RenderTy)`
  ${(props) =>
    props.variant === 'h1' &&
    `font-size: 3.5rem;
    line-height: 1.17857143;
    text-transform: uppercase;
    font-weight: 700;
    color:${props.theme.colors.dark}`}
`;
// const TyporaphyCustom = styled.RenderTy((props) => ({
//   ...(props.variant === 'h1' && {
//     fontSize: '3.5rem',
//     lineHeight: '1.17857143',
//     textTransform: 'uppercase',
//     fontWeight: '700',
//     color: `${props.theme.colors.dark}`,
//   }),
// }));
const Typography = forwardRef(
  ({ component, variant, align, children }, ref) => {
    return (
      <TyporaphyCustom
        ref={ref}
        component={component || null}
        align={align}
        variant={variant}
      >
        {children}
      </TyporaphyCustom>
    );
  },
);
// const Typography = ({
//   variant = 'h1',
//   children = null,
//   align = 'inherit ',
//   component = null,
//   classes = null,
//   ...rest
// }) => {
//   const RenderTypography = () => {
//     let RenderComponent = component !== null ? `${component}` : `${variant}`;
//     if (RenderComponent === 'h4_subtitle') {
//       RenderComponent = 'h4';
//     }
//     return (
//       <RenderComponent
//         style={{ textAlign: align }}
//         className={`typoraphy ${variant} ${!!classes ? classes : ''}`}
//         {...rest}
//       >
//         {children}
//       </RenderComponent>
//     );
//   };
//   return (
//     <>
//       <RenderTypography></RenderTypography>
//     </>
//   );
// };
export default React.memo(Typography);
