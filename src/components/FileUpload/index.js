import styled from '@emotion/styled';
import Button from 'components/button';
import React, { useState } from 'react';
const InputUpload = ({
  className,
  maxSize,
  icon,
  label,
  children,
  isLoading,
  ...rest
}) => {
  const [files, setFiles] = useState([]);
  const [fileError, setFileError] = useState('');
  const [imageReviews, setImageReview] = useState('');
  const [isConfirm, setConfirm] = useState(false);
  console.log(rest);
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
      setConfirm(!isConfirm);
      setImageReview(URL.createObjectURL(files[0]));
      console.log(files, e, URL.createObjectURL(files[0]));
    }
  };
  return (
    <>
      <div className={`${className} `}>
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
              <g
                fill="none"
                fillRule="evenodd"
                transform="translate(-595 -196)"
              >
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
                disabled={isLoading}
                className="file"
                id="file"
                type="file"
                onChange={onChangeFile}
                {...rest}
              />
              <div>
                {icon || <i class="fal fa-camera"></i>}
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
              <Button size="small" variant="container">
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
  borderUploadFileColor: '#d3dae6',
  iconFileUploadColor: '#a8b0bf',
};
const FileUploadCustom = styled(InputUpload)`
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  border: 1px dashed #d3dae6;
  padding: 8px 5px;
  border-radius: 2px;
  .avatar-upload {
    &__reviews {
      flex-shrink: 0;
      width: 128px;
      height: 128px;
      position: relative;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    &__actions {
      button:first-child {
        margin-right: 5px;
        background-color: red;
      }
    }
    &__wrap {
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    &__text,
    &__or {
      color: #a8b0bf;
      font-weight: 500;
      font-size: 14px;
      min-width: 197px;
    }
    &__or {
      color: #a8b0bf;
      margin: 12px auto;
      position: relative;
      width: 286px;
      position: relative;
      max-width: 100%;
      span {
        padding: 0 30px;
        z-index: 2;
        background-color: #f5f7fa;
        postion: relative;
      }
      &:before {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: -1;
        background: rgba(168, 176, 191, 0.23);
      }
      &:after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        right: 0;
        z-index: -1;
        background: rgba(168, 176, 191, 0.23);
      }
    }
    &__uploader {
      border: 1px solid ${UploadFileColor.borderUploadFileColor};
      padding: 7px 47px 9px 51px;
      position: relative;
      border-radius: 0.125rem;
      margin-left: auto;
      margin-right: auto;
      color: ${(props) => props.theme.colors.textColor};
      width: 165px;
      height: 39px;

      &:hover {
        border-color: ${(props) => props.theme.colors.primary};
      }
      .file {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 99;
      }
      & > div {
        width: 165px;
        height: 39px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding-left: 17px;
        justify-content: space-between;
        padding-right: 52px;
      }
      i {
        font-size: 16px;
        color: ${UploadFileColor.iconFileUploadColor};
      }
      .description {
        color: red;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 20px);
        width: 100%;
        text-align: center;
      }
      .label {
        font-size: 13px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.textColor};
        cursor: pointer;
      }
      .list-file {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 41px;
        padding: 0;
      }
    }
  }
`;
const FileUpload = ({ icon, maxSize, label, isLoading, ...rest }) => {
  return (
    <FileUploadCustom maxSize={maxSize} label={label} icon={icon} {...rest}>
      {' '}
    </FileUploadCustom>
  );
};
FileUpload.defaultProps = {
  label: 'Select file',
  icon: <i className="fal fa-camera"></i>,
  maxSize: null,
};
export default FileUpload;
