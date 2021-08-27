import React from 'react';
import Button from '@material-ui/core/Button';


const FileUploader = ({onFileUpload,buttonName,style}) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = ()  => {
    hiddenFileInput.current.click();
  };
 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    onFileUpload(fileUploaded);
  };
  return (
    <>
      <Button onClick={handleClick}  className={style}  >
        {buttonName}
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  );
}
export default FileUploader