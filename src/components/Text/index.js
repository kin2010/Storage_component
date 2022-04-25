import styled from '@emotion/styled';
import { UploadFileColor } from 'components/FileUpload';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconCamera,
  StyledInputFile,
  StyledUpload,
  StyledUploadDiv,
  StyledUploadError,
  StyledUploadLabel,
  StyledUploadListfile,
} from './style';
const UploadFileCustom = ({
  maxSize,
  isLoading,
  accept,
  label,
  icon,
  ...rest
}) => {
  const [files, setFiles] = useState([]);
  const [fileError, setFileError] = useState('');
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
      setFileError('');
    }
  };
  return (
    <StyledUpload>
      <StyledUploadError className="fileError">{fileError}</StyledUploadError>
      <StyledInputFile
        disabled={isLoading && true}
        className="file"
        id="file"
        type="file"
        accept={accept}
        onChange={onChangeFile}
        {...rest}
      />
      <StyledUploadDiv>
        {icon || <IconCamera></IconCamera>}
        <StyledUploadLabel className="label">{label}</StyledUploadLabel>
      </StyledUploadDiv>
      <StyledUploadListfile className="list-file">
        {files &&
          Object.values(files).map((file, index) => (
            <span key={index}>
              {file?.name.length < 10
                ? file?.name
                : '...' + file?.name.slice(-11)}
            </span>
          ))}
      </StyledUploadListfile>
    </StyledUpload>
  );
};
const Text = forwardRef(
  ({ isLoading, accept, label, maxSize, icon, ...rest }, ref) => {
    return (
      <>
        <UploadFileCustom
          isLoading={isLoading}
          accept={accept}
          icon={icon}
          maxSize={maxSize}
          label={label}
          {...rest}
        ></UploadFileCustom>
      </>
    );
  },
);
Text.propTypes = {
  isLoading: PropTypes.bool,
  accept: PropTypes.string,
  icon: PropTypes.node,
  maxSize: PropTypes.number,
  label: PropTypes.string,
};
Text.defaultProps = {
  label: 'Select file',
  accept: 'image/*',
  icon: <IconCamera />,
};
export default Text;
