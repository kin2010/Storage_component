import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledAlert,
  StyledAlertButton,
  StyledAlertIcon,
  StyledAlertText,
} from './style';
const Alert = forwardRef(
  ({ icon, severity, children, variant, ...rest }, ref) => {
    const [show, setShow] = useState(true);
    return (
      <>
        {show && (
          <StyledAlert
            severity={severity}
            variant={variant}
            ref={ref}
            {...rest}
          >
            <StyledAlertIcon className="alert_icon">{icon}</StyledAlertIcon>
            <StyledAlertText className="alert_text">{children}</StyledAlertText>
            <StyledAlertButton
              className="alert_close"
              onClick={() => {
                setShow(!show);
              }}
            >
              <span>×</span>
            </StyledAlertButton>
          </StyledAlert>
        )}
      </>
    );
  },
);
Alert.propTypes = {
  icon: PropTypes.node,
  severity: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  variant: PropTypes.oneOf(['outlined', 'filled']),
};
Alert.defaultProps = {
  severity: 'error',
  variant: 'filled',
  icon: null,
};
export default React.memo(Alert);
