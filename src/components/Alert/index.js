import React, { forwardRef, useRef, useState } from 'react';
import styled from '@emotion/styled';
const mapVariantColor = (props, color) => {
  return {
    ...(props.variant === 'outlined' && {
      border: `1px solid ${color}`,
    }),
    ...(props.variant === 'filled' && {
      color: `${props.theme.colors.white}`,
      backgroundColor: `${color}`,
    }),
  };
};
const AlertCustom = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  display: '-webkit-flex',
  justifyContent: 'space-between',
  fontSize: '1.6rem',
  lineHeight: '34px',
  padding: '8px 19px',
  borderRadius: '0.4rem',
  color: `${props.theme.colors.textColor}`,
  borderColor: ' rgba(0, 0, 0, 0)',
  '.alert_close': {
    cursor: 'pointer',
    float: 'right',
    border: 'none',
    background: 'transparent',
    padding: '0 1.8rem',
    color: `${props.theme.colors.textColor}`,
    opacity: ' 1',
    filter: 'alpha(opacity=100)',
    textShadow: 'none',
    height: '100%',
    fontSize: '1.6rem',
    fontWeight: '700',
    lineHeight: '1',
  },
  '.alert_text': {
    marginRight: 'auto',
  },
  '.alert_icon': {
    marginRight: '10px',
  },
  ...(props.severity === 'success' && {
    backgroundColor: `${props.theme.colors.success}50`,
    color: `${props.theme.colors.success}`,
    ...mapVariantColor(props, props.theme.colors.success),
  }),
  ...(props.severity === 'error' && {
    backgroundColor: `${props.theme.colors.errorBgAlert}` || '#f8d7da',
    color: `${props.theme.colors.errorAlert}` || '#721c24',
    ...mapVariantColor(props, props.theme.colors.errorAlert),
  }),
  ...(props.severity === 'info' && {
    backgroundColor: `${props.theme.colors.info}50`,
    color: `${props.theme.colors.info}`,
    ...mapVariantColor(props, props.theme.colors.info),
  }),
  ...(props.severity === 'warning' && {
    backgroundColor: `${props.theme.colors.orange}50`,
    color: `${props.theme.colors.orange}`,
    ...mapVariantColor(props, props.theme.colors.orange),
  }),
}));
const Alert = forwardRef(
  ({ icon, severity, children, variant, ...rest }, ref) => {
    const [show, setShow] = useState(true);
    return (
      <>
        {show && (
          <AlertCustom
            severity={severity || 'error'}
            variant={variant || 'standard'}
            ref={ref}
            {...rest}
          >
            <span className="alert_icon">{icon}</span>
            <span className="alert_text">{children}</span>
            <button
              className="alert_close"
              onClick={() => {
                setShow(!show);
              }}
            >
              <span>×</span>
            </button>
          </AlertCustom>
        )}
      </>
    );
  },
);
export default React.memo(Alert);
