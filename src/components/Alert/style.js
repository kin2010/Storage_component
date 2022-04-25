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
export const StyledAlertButton = styled.button((props) => ({
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
}));
export const StyledAlertText = styled.span((props) => ({
  marginRight: 'auto',
}));
export const StyledAlertIcon = styled.span((props) => ({
  marginRight: '10px',
}));
export const StyledAlert = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.6rem',
  lineHeight: '34px',
  padding: '8px 19px',
  borderRadius: '0.4rem',
  color: `${props.theme.colors.textColor}`,
  borderColor: ' rgba(0, 0, 0, 0)',
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
    backgroundColor: `${props.theme.colors.warning}50`,
    color: `${props.theme.colors.warning}`,
    ...mapVariantColor(props, props.theme.colors.warning),
  }),
}));
