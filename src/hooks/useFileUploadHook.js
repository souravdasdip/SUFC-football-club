import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";


function useFileUploadHook(file) {
        const [progress, setprogress] = useState(null)
        const [notice, setnotice] = useState('')
        const [error, seterror] = useState('')
        const [photourl, setphotourl] = useState('')
        
        useEffect(() => {
            const storage = getStorage();
            // Create the file metadata
            const metadata = {
                contentType: 'image/jpeg'
            };
            const storageRef = ref(storage, 'images/' + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);
            // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progressupload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setprogress(progressupload)

            switch (snapshot.state) {
            case 'paused':
                setnotice('Upload is paused');
                break;
            case 'running':
                setnotice('Upload is running');
                break;
            default:
                setnotice('')

            }
        }, 
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
            case 'storage/unauthorized':
                seterror("User doesn't have permission to access the object")
                break;
            case 'storage/canceled':
                seterror("User canceled the upload")
                break;

            // ...

            case 'storage/unknown':
                seterror("Unknown error occurred!")
                break;
            default:
                seterror('')
            }
        }, 
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setphotourl(downloadURL)
            });
        }
);
            
        }, [file])
        
        return {photourl, notice, error, progress }
}

export default useFileUploadHook
