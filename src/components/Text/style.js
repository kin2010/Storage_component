import styled from '@emotion/styled';
export const UploadFileColor = {
  borderUpload: '#d3dae6',
  textUpload: '#a8b0bf',
  backgroundUpload: '#f5f7fa',
};
export const StyledUploadError = styled('span')((props) => ({
  color: 'red',
  position: 'absolute',
  bottom: '6px',
  left: '50%',
  transform: 'translate(-50%, 20px)',
  width: '100%',
  textAlign: 'center',
}));
export const StyledInputFile = styled('input')((props) => ({
  opacity: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 99,
  cursor: props.isLoading ? 'default' : 'pointer',
}));
export const StyledUploadDiv = styled('div')((props) => ({
  width: '165px',
  height: ' 39px',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '17px',
  justifyContent: 'space-between',
  paddingRight: '52px',
}));
export const StyledUploadLabel = styled('label')((props) => ({
  fontSize: '13px',
  fontWeight: 500,
  color: props.theme.colors.textColor,
  cursor: 'pointer',
}));
export const StyledUploadListfile = styled('div')((props) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '41px',
  padding: 0,
}));
export const StyledUpload = styled('div')((props) => ({
  border: `1px solid ${UploadFileColor.borderUpload}`,
  padding: '7px 47px 9px 51px',
  position: 'relative',
  borderRadius: '0.125rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  color: props.theme.colors.textColor,
  width: '165px',
  height: '39px',
  '&:hover': {
    borderColor: props.isLoading
      ? UploadFileColor.borderUpload
      : props.theme.colors.primary,
  },
}));
export const IconCamera = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={22}
        height={18}
        viewBox="0 0 16 13"
      >
        <defs>
          <rect id="a" width={644} height={150} x={211} y={176} rx={2} />
          <mask
            id="b"
            width={644}
            height={150}
            x={0}
            y={0}
            fill="#fff"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
          >
            <use xlinkHref="#a" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(-538 -289)">
          <use
            fill="#F5F7FA"
            stroke="#D3DAE6"
            strokeDasharray="2,4"
            strokeWidth={2}
            mask="url(#b)"
            xlinkHref="#a"
          />
          <rect
            width={153}
            height={32}
            x=".5"
            y=".5"
            fill="#F5F7FA"
            stroke="#D3DAE6"
            rx={2}
            transform="matrix(1 0 0 -1 527 312)"
          />
          <path
            fill="#A8B0BF"
            fillRule="nonzero"
            stroke="#A8B0BF"
            strokeWidth=".4"
            d="M540.408 301.048h11.184A1.41 1.41 0 00553 299.64v-6.405a1.41 1.41 0 00-1.408-1.408h-1.659a.965.965 0 01-.937-.756 1.174 1.174 0 00-1.14-.919h-3.711a1.174 1.174 0 00-1.141.92.965.965 0 01-.937.755h-1.659a1.41 1.41 0 00-1.408 1.407v6.406c0 .777.63 1.407 1.408 1.408zm-.848-7.814c0-.468.38-.847.848-.847h1.659c.713-.004 1.33-.5 1.484-1.197a.611.611 0 01.594-.478h3.71c.286.001.532.2.594.478a1.528 1.528 0 001.484 1.197h1.659c.468 0 .848.38.848.848v6.405c0 .468-.38.847-.848.848h-11.184a.849.849 0 01-.848-.848v-6.406zm6.44 5.955a3.05 3.05 0 100-6.101 3.05 3.05 0 000 6.101h0zm0-5.541a2.49 2.49 0 110 4.981 2.49 2.49 0 010-4.981zm4.534 1.468a.995.995 0 100-1.99.995.995 0 000 1.99h0zm0-1.43a.435.435 0 110 .87.435.435 0 010-.87h0z"
          />
        </g>
      </svg>
    </>
  );
};
