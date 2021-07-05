import React, { useState } from "react";
import "./styles.css";

import Dropzone from "react-dropzone";

export default function Dropzone1({handleDrop}) {
  // const [fileNames, setFileNames] = useState([]);
  // const handleDrop = acceptedFiles =>
  // {
  //   acceptedFiles.map(file =>{
  //       console.log(file)
  //   })
      
  //   setFileNames((acceptedFiles.map(file => Object.assign(file, {
  //       preview: URL.createObjectURL(file)
  //     }))))
  // }
  return (
    <div className="App">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone-file" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
        
    </div>
  );
}