import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
const AlertCustom = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  display: '-webkit-flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
  lineHeight: '34px',
  padding: ' 8px 19px',
  borderRadius: '0.25rem',
  color: '#1b1b1b',
  borderColor: ' rgba(0, 0, 0, 0)',
  '.alert_close': {
    cursor: 'pointer',
    float: 'right',
    border: 'none',
    background: 'transparent',
    padding: '0 1.8rem',
    color: '#1b1b1b',
    opacity: ' 1',
    filter: 'alpha(opacity=100)',
    textShadow: 'none',
    height: '100%',
    fontSize: '1.6rem',
    fontWeight: '700',
    lineHeight: '1',
  },
  '.alert_text': {
    marginLeft: '10px',
    marginRight: 'auto',
  },
  ...(props.variant === 'success' && {
    backgroundColor: '#c7ecd6',
    color: '#22ab59',
    border: '1px solid #62be87',
  }),
}));
// const Alert = ({
//   severity = 'error',
//   variant = 'filled',
//   children = null,
//   onClick = () => {},
// }) => {
//   return (
//     <>
//       <div className={`alert alert_${severity}   alert_${variant}`}>
//         <span>{children}</span>
//         <button className="alert_close" onClick={onClick}>
//           <span>×</span>
//         </button>
//       </div>
//     </>
//   );
// };
const Alert = forwardRef(({ children, variant }, ref) => {
  return (
    <>
      <AlertCustom variant={variant} ref={ref}>
        <i className="far fa-thumbs-up"></i>
        <span className="alert_text">{children}</span>
        <button className="alert_close">
          <span>×</span>
        </button>
      </AlertCustom>
    </>
  );
});
export default React.memo(Alert);
