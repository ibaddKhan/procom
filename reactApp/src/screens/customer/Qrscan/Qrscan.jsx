import React, { useState, useRef } from 'react';

const Qrscan = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile(reader.result);
      };

      reader.readAsDataURL(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div>Qrscan</div>
      <div className="App">
        <h2>Add Image:</h2>
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            border: '2px dashed #aaa',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            marginTop: '10px',
            cursor: 'pointer',
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="fileInput">Click or Drag & Drop Image Here</label>
        </div>
        {file && (
          <div>
            <h3>Selected Image:</h3>
            <img
              src={file}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Qrscan;
