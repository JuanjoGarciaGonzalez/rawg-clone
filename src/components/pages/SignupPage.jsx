import React from 'react'
import firebaseApp from '../../firebase/FirebaseApp'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
const auth = getAuth(firebaseApp)

export const SignupPage = () => {

    const handleSignup = (e) => {
        e.preventDefault()
        const email = document.querySelector('#email').value
        const pass = document.querySelector('#pass').value
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                window.location.href = '/profile'
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
            })
    }

    const googleSignUp = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                window.location.href = '/profile'
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                const email = error.email
                const credential = GoogleAuthProvider.credentialFromError(error)
            })
    }


    return (
        <section className='content login padding'>
            <div>
                <h2 className='page-title'>Signup</h2>
                <form onSubmit={handleSignup}>
                <input type="email" name="email" id="email" placeholder='Email' required/>
                    <input type="password" name="pass" id="pass" placeholder='********' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$" title="La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un número." required />
                    <input type="submit" value="Sign up" />
                </form>
                <a href="/login">Already have an account? Log in!</a>
            </div>

            <div>
                <h3>You can use Google account to sign up</h3>
                <button className="google-button" onClick={googleSignUp}>
                    <img width="20px"  alt="Google sign-up" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" />
                Continue with Google</button>
            </div>
        </section>
    )
}

