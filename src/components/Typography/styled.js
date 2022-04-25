import styled from '@emotion/styled';
const StyledH1 = styled.h1((props) => ({
  textAlign: props.align,
  fontSize: '56px',
  lineHeight: '1.17857143',
  textTransform: 'uppercase',
  fontWeight: '700',
  color: `${props.color}`,
}));
const StyledH2 = styled.h2((props) => ({
  textAlign: props.align,
  fontSize: '48px',
  lineHeight: '1.16666667',
  textTransform: 'uppercase',
  color: `${props.color}`,
}));
const StyledH3 = styled.h3((props) => ({
  textAlign: props.align,
  fontSize: '30px',
  lineHeight: '1.33333333',
  fontWeight: '700',
  color: `${props.color}`,
}));
const StyledH4 = styled.h4((props) => ({
  textAlign: props.align,
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '1.5',
  color: `${props.color}`,
}));
const StyledH5 = styled.h5((props) => ({
  textAlign: props.align,
  color: `${props.color}`,
  fontSize: '16px',
  lineHeight: 'normal',
  fontWeight: '700',
}));
const StyledH6 = styled.h6((props) => ({
  textAlign: props.align,
  fontSize: '14px',
  fontWeight: '500',
  color: `${props.color}`,
}));
const StyledSpan = styled.span((props) => ({
  textAlign: props.align,
  fontFamily: '"Farsan", sans-serif',
  fontSize: '24px',
  lineHeight: ' 0.91666667',
  fontWeight: '300',
  color: props.color ? `${props.color}` : `${props.theme.colors.textColor}`,
}));
const StyledP = styled.p((props) => ({
  textAlign: props.align,
  fontSize: '20px',
  lineHeight: '1.5',
  fontWeight: '300',
  color: props.color ? `${props.color}` : `${props.theme.colors.textColor}`,
}));
const StyledH4Primary = styled.h4((props) => ({
  textAlign: props.align,
  fontSize: '16px',
  lineHeight: 'normal',
  fontWeight: '700',
  color: `${props.theme.colors.primary}`,
}));
export const StyledTypography = ({ variant, ...rest }) => {
  switch (variant) {
    case 'h1': {
      return <StyledH1 {...rest}></StyledH1>;
    }
    case 'h2': {
      return <StyledH2 {...rest}></StyledH2>;
    }
    case 'h3': {
      return <StyledH3 {...rest}></StyledH3>;
    }
    case 'h4': {
      return <StyledH4 {...rest}></StyledH4>;
    }
    case 'h5': {
      return <StyledH5 {...rest}></StyledH5>;
    }
    case 'h6': {
      return <StyledH6 {...rest}></StyledH6>;
    }
    case 'h4Primary': {
      return <StyledH4Primary {...rest}></StyledH4Primary>;
    }
    case 'span': {
      return <StyledSpan {...rest}></StyledSpan>;
    }
    case 'p': {
      return <StyledP {...rest}></StyledP>;
    }
    default:
      return <StyledH1 {...rest}></StyledH1>;
  }
};
export default StyledTypography;
