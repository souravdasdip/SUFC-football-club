import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import "../firebase";

//create a context
const AuthContext = createContext()

//to use state and functionality of context
export function useAuth() {
    return useContext(AuthContext)
}

//wrap and provider to provides state and functionality
export function AuthProvider({ children }) {
    const [loading, setloading] = useState(true)
    const [currentuser, setcurrentuser] = useState()

    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setcurrentuser(user)
            setloading(false)
        })
        
        return unsubscribe
    }, [])

    //signup function
    async function signup(email,password,username) {
        const auth = getAuth()
        console.log(auth);
        await createUserWithEmailAndPassword(auth, email, password)

        //update Profile
        await updateProfile(auth.currentUser, {
            displayName: username
        })

        const user = auth.currentUser
        setcurrentuser({
            ...user
        })
    }

    //login function
    function signin(email, password) {
        const auth = getAuth()
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout function
    function logout() {
        const auth = getAuth()
        return signOut(auth)
        
    } 

    const value = {
        currentuser, 
        signup,
        signin,
        logout,
      }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}