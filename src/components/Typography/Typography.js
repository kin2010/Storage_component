import React from 'react';
import './typography.scss';
const Typography = ({
  variant = 'h1',
  children = null,
  align = 'inherit ',
  component = null,
  classes = null,
  ...rest
}) => {
  const RenderTypography = () => {
    let RenderComponent = component !== null ? `${component}` : `${variant}`;
    if (RenderComponent === 'h4_subtitle') {
      RenderComponent = 'h4';
    }
    return (
      <RenderComponent
        style={{ textAlign: align }}
        className={`typoraphy ${variant} ${!!classes ? classes : ''}`}
        {...rest}
      >
        {children}
      </RenderComponent>
    );
  };
  return (
    <>
      <RenderTypography></RenderTypography>
    </>
  );
};
export default React.memo(Typography);
