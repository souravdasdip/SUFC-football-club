import { motion } from "framer-motion";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import BackdropLoading from "../components/BackdropLoading";
import Input from '../components/Input';
import { useAuth } from '../contexts/AuthContext';


function SignIn() {
    const history = useHistory()
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [error, seterror] = useState('')
    const { signup, signin } = useAuth()
    const [signinoption, setsigninoption] = useState(true)
    const [loading, setloading] = useState(false)
    console.log(signinoption);

    const handleSignIn = async (e) => {
        setloading(true)
        e.preventDefault()
        try {
            await signin(email, password)
            setemail('')
            setpassword('')
            history.push("/")
            setloading(false)
        } catch (error) {
            console.log(error);
            if (error) {
                seterror("Invalid credentials!")
            }
        }

    }
    const handleSignUp = async (e) => {
        setloading(true)
        e.preventDefault()  
        console.log("Fired");

        try {
            if(password !== confirmpassword){
                    seterror("Password is not matched!")
            }
            
            await signup(email, password, username)
            
            setusername('')
            setemail('')
            setpassword('')
            setconfirmpassword('')
            history.push("/")
            setloading(false)
        } catch (error) {
            setloading(false)
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                seterror("User mail already in used!");
            }
        }

    }

    let onSubmitEvent = signinoption === true ? handleSignIn : handleSignUp
    console.log(onSubmitEvent);
    return (
        <div className="wrapper" style={{width: "100vw",height:"80vh", display: "grid", placeItems: "center"}}>
        <BackdropLoading bool={loading}/>
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
             style={{display: "flex", flexWrap: "wrap",justifyContent:"space-between", alignItems: "center", width: "80%", textAlign: 'center', margin: '2rem 0'}}>
            <Form onSubmit={onSubmitEvent}>
                <h2 style={{marginBottom: "1.5rem"}}>{!signinoption ? 'Sign Up' : 'Sign In'}</h2>
                {
                    !signinoption && 
                    <Input value={username} onChange ={(e) => setusername(e.target.value)} type="text" name="username" placeholder='Enter your username...'/>
                }
                <Input required value={email} onChange ={(e) => setemail(e.target.value)}  type="email" name="email" placeholder='Enter your email...'/>
                <Input required value={password} onChange ={(e) => setpassword(e.target.value)} type="password" name="password" placeholder='Enter your password...'/>
                {
                    !signinoption && 
                    <Input value={confirmpassword} onChange ={(e) => setconfirmpassword(e.target.value)} type="password" name="password" placeholder='Confirm password...'/>
                }
                {error && <span>{error}</span>}
                <Button type='submit'>{!signinoption ? "sign Up" : "sign In"}</Button>
                <span style={{cursor: "pointer", fontWeight: "800", textDecoration: "underline"}} onClick={() => setsigninoption(!signinoption) }>{
                    signinoption ? "Need an account?" : "Already have an account?"
                }</span>
            </Form>
            <Image src={process.env.PUBLIC_URL + "login.svg"} alt="" />
        </motion.div>
        </div>
    )
}

const Image = styled.img`
    width: 50%;
    @media only screen and (max-width: 720px){
        display: none;
    }
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: .6rem;
    flex: 1;
    background-color: rgba(0,0,0,0.1);
    padding: 1.5rem;
    border-radius: 1rem;
`

const Button = styled.button`
    border: none;
    font-weight: 700;
    background-color: rgba(0,0,0,0.8);
    padding: .6rem 2rem;
    border-radius: .5rem;
    color: white !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export default SignIn
