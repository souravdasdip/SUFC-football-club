import Alert from '@mui/material/Alert';
import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from '../../components/ProgressBar';
import { useAuth } from '../../contexts/AuthContext';


function UserProfile() {
    const {currentuser} = useAuth()
    const {displayName, email, emailVerified, photoURL, phoneNumber} = currentuser
    
    const [file, setfile] = useState(null)
    const [error, seterror] = useState(null)
    const [confirmation, setconfirmation] = useState(null)
    const [newuserphoto, setnewuserphoto] = useState('')
    
    const handleUserPhoto = (e) => {
        const selected = e.target.files[0] 
        const types = ["image/png", "image/jpg"]
        if(selected && types.includes(selected.type)){
            setfile(selected)
            seterror(null)
        }else{
            setfile(null)
            seterror("Please select an image file (png or jpg)")
        }
        
        
    } 

    setTimeout(() => {
        setconfirmation('')
    }, 5000);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const auth = getAuth();
        await updateProfile(auth.currentUser, {
        // displayName: "Jane Q. User", 
        photoURL: newuserphoto
        }).then(() => {
            setconfirmation("Updated profile!");
            setfile(null)
            seterror('')
        }).catch((error) => {
            seterror("Something going wrong. PLease try again later!")
            setconfirmation('')
        });
    }
    
    return (
        <Container>
            <div>
            {emailVerified === false ? <Alert variant='outlined' severity="warning">User is not verified!</Alert> : <Alert severity="success">Verified user!</Alert>
            } 
            <h2 style={{margin: '1em 0'}}>Welcome, <User>{displayName}</User></h2> 
            


            <Details>Email: <span>{email}</span></Details>
            <Details><span>Phone Number:</span> <span>{phoneNumber}</span> 
            <input type="tel" id="phone" name="phone" placeholder="+8801234-456-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />

            </Details>
            <Details>
            <input type="file" onChange={handleUserPhoto}  />
            {error && <p>{error}</p>}
            
            </Details>
            <p>{file && <p>{file.name}</p> }</p>
            {file && 
                <ProgressBar setnewuserphoto={setnewuserphoto} file={file} setfile={setfile} />
            }

            <button onClick={handleSubmit} >Update Profile</button>
            <Details>{confirmation && confirmation}
            </Details>
            </div>
            <Image src={photoURL} alt={displayName}/>
        </Container>
    )
}
const Details = styled.div`
    margin: 1em 0;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 2em 6.2em;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
`
const Image = styled.img`
    width: 15vw;
    object-fit: contain;
    border-radius: 1em;
`

const User = styled.span`
    color: #333;
    text-transform: uppercase;
    font-weight: 800;
`


export default UserProfile
