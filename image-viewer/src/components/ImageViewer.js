import React, { useState } from 'react'
import './imageViewer.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function ImageViewer() {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) =>{
        if(e.target.files){
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.createObjectURL(file)
            )
        }
    }

    const renderPhotos = (source) =>{
        return source.map((photo)=>{
            return <img src={photo} alt="" key={photo} />
        })
    }

  return (
    <div className="image_viewer" >
        <div className="heading" >Image Viewer</div>

        <div>
            <input type="file" id="file" multiple onChange={handleImageChange}  />
            <div className="label-holder">
                <label htmlFor="file" className="label">
                    <AddAPhotoIcon />
                </label>
            </div>
            <div className="result">{renderPhotos(selectedFiles)}</div>
        </div>
    </div>
  )
}

export default ImageViewer