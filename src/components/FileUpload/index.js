import styled from '@emotion/styled';
import Button from 'components/button';
import React, { useState } from 'react';
const IconCamera = () => {
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
const IconImage = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={25}
        height={25}
        viewBox="0 0 20 20"
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
        <g fill="none" fillRule="evenodd" transform="translate(-595 -196)">
          <use
            fill="#F5F7FA"
            stroke="#D3DAE6"
            strokeDasharray="2,4"
            strokeWidth={2}
            mask="url(#b)"
            xlinkHref="#a"
          />
          <path d="M593 194h24v24h-24z" />
          <path
            fill="#A8B0BF"
            fillRule="nonzero"
            d="M596.6 201.2h1.8v1.2h-1.8v1.8h-1.2v-3h1.2zm12 14.4h-.6v-1.2h.6v-.6h1.2v1.8h-1.2zm-12-1.2h1.8v1.2h-3v-1.8h1.2v.6zm-1.2-9h1.2v3h-1.2v-3zm0 4.2h1.2v3h-1.2v-3zm13.2 1.2h1.2v1.8h-1.2v-1.8zm-9 3.6h3v1.2h-3v-1.2zm0-13.2h.6v1.2h-.6v-1.2zm4.2 13.2h3v1.2h-3v-1.2z"
          />
          <path
            fill="#A8B0BF"
            fillRule="nonzero"
            d="M613.4 208.751V197.6h-12v6.891l1.221-1.221.849-.849.848.849 3.352 3.351.951-.951.849-.849.848.849 3.082 3.081zm-.849.849l-3.081-3.082-1.779 1.762-4.221-4.162-2.07 2.07v3.412h11.151zM600.2 196.4h14.4v14.4h-14.4v-14.4zm9.6 7.2a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0-1.2a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
          />
        </g>
      </svg>
    </>
  );
};
const InputUpload = ({
  className,
  maxSize,
  icon,
  label,
  accept,
  children,
  isLoading,
  ...rest
}) => {
  const [files, setFiles] = useState([]);
  const [fileError, setFileError] = useState('');
  const [imageReviews, setImageReview] = useState('');
  const [isConfirm, setConfirm] = useState(false);
  const handleCancer = () => {
    setConfirm(false);
    setImageReview(null);
    setFiles([]);
    setFileError('');
  };
  const onChangeFile = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      for (const file of files) {
        const size = file.size;
        if (maxSize !== null && size > maxSize) {
          setFileError(`Max size is ${maxSize} `);
          return;
        }
      }
      setFiles(files);
      setConfirm(true);
      setImageReview(URL.createObjectURL(files[0]));
    }
  };
  return (
    <>
      <div className={className}>
        <div className="avatar-upload__reviews">
          <img
            src={
              imageReviews ||
              'https://picoworkers.com/assets/images/profile_no_image.gif'
            }
            alt=""
          />
        </div>
        <div className="avatar-upload__wrap">
          <span className="description">{fileError}</span>
          <div className="avatar-upload__text">
            <IconImage />
            <br />
            <span>
              {!isConfirm
                ? 'Drag and drop an image here or'
                : 'Save this avatar?'}
            </span>
          </div>
          <div className="avatar-upload__or">
            <span>{!isConfirm && 'or'}</span>
          </div>
          {!isConfirm && (
            <div className="avatar-upload__uploader">
              <input
                disabled={isLoading && true}
                className="file"
                id="file"
                type="file"
                accept={accept}
                onChange={onChangeFile}
                {...rest}
              />
              <div>
                {icon || <IconCamera></IconCamera>}
                <span className="label">{label}</span>
              </div>
              <div className="list-file">
                {files &&
                  Object.values(files).map((file, index) => (
                    <span key={index}>
                      {file?.name.length < 10
                        ? file?.name
                        : '...' + file?.name.slice(-11)}
                    </span>
                  ))}
              </div>
            </div>
          )}
          {isConfirm && (
            <div className="avatar-upload__actions">
              <Button size="small" variant="container" onClick={handleCancer}>
                Cancer
              </Button>
              <Button size="small" variant="container">
                Confirm
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export const UploadFileColor = {
  borderUpload: '#d3dae6',
  textUpload: '#a8b0bf',
  backgroundUpload: '#f5f7fa',
};
const FileUploadCustom = styled(InputUpload)((props) => ({
  backgroundColor: UploadFileColor.backgroundUpload,
  display: 'flex',
  alignItems: 'center',
  border: `1px dashed ${UploadFileColor.borderUpload}`,
  padding: '8px 5px',
  borderRadius: '2px',
  '.avatar-upload': {
    ' &__reviews': {
      flexShrink: 0,
      width: '128px',
      height: '128px',
      position: 'relative',
      img: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
      },
    },
    '&__actions': {
      'button:first-of-type': {
        marginRight: '5px',
        backgroundColor: 'red',
      },
      button: {
        fontSize: '14px',
      },
    },
    '&__wrap': {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      position: 'relative',
      ' .description': {
        color: 'red',
        position: 'absolute',
        bottom: '6px',
        left: '50%',
        transform: 'translate(-50%, 20px)',
        width: '100%',
        textAlign: 'center',
      },
    },
    ' &__text, &__or ': {
      color: UploadFileColor.textUpload,
      fontWeight: '500',
      fontSize: '14px',
      minWidht: '197px',
    },
    ' &__or ': {
      color: UploadFileColor.textUpload,
      margin: '12px auto',

      width: '286px',
      position: 'relative',
      maxWidth: '100%',
      ' span': {
        padding: '0 30px',
        zIndex: 2,
        backgroundColor: UploadFileColor.backgroundUpload,
        postion: 'relative',
      },
      '&:before': {
        content: '""',
        width: '100%',
        height: '1px',
        position: 'absolute',
        top: '50%',
        left: 0,
        zIndex: -1,
        background: 'rgba(168, 176, 191, 0.23)',
      },
      ' &:after': {
        content: '""',
        width: '100%',
        height: '1px',
        position: 'absolute',
        top: '50%',
        right: 0,
        zIndex: -1,
        background: 'rgba(168, 176, 191, 0.23)',
      },
    },
    '&__uploader': {
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
      '.file': {
        opacity: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 99,
        cursor: props.isLoading ? 'default' : 'pointer',
      },
      ' & > div': {
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
      },
      ' i': {
        fontSize: ' 16px',
        color: UploadFileColor.iconFileUploadColor,
      },
      '.label': {
        fontSize: '13px',
        fontWeight: 500,
        color: props.theme.colors.textColor,
        cursor: 'pointer',
      },
      ' .list-file': {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '41px',
        padding: 0,
      },
    },
  },
}));
const FileUpload = ({ icon, accept, maxSize, label, isLoading, ...rest }) => {
  return (
    <FileUploadCustom
      accept={accept}
      maxSize={maxSize}
      label={label}
      icon={icon}
      isLoading={isLoading}
      {...rest}
    >
      {' '}
    </FileUploadCustom>
  );
};
FileUpload.defaultProps = {
  label: 'Select file',
  icon: <IconCamera></IconCamera>,
  maxSize: null,
  accept: 'image/*',
};
export default FileUpload;
