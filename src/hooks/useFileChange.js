
import { useEffect, useState } from 'react'

const useFileChange = (event) => {

    const [selectedFile, setSelectedFile] = useState()
    
    const fileTypes = [
        "image/jpg",
        "image/png",
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.doc",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ];
  
      if (fileTypes.includes(event.target.files[0].type)) {
        if (event.target.files && event.target.files[0]) {
          if (event.target.files[0].size < 5000000) {
            setSelectedFile(event.target.files[0]);
          } else alert("File size too big");
        }
      } else {
        alert("Image type not supported");
      }
   
}

export default useFileChange