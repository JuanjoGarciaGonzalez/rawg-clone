import React from 'react'
import firebaseApp from '../../firebase/FirebaseApp'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
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


    return (
        <section className='content login padding'>
            <div>
                <h2 className='page-title'>Signup</h2>
                <form onSubmit={handleSignup}>
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="password" name="pass" id="pass" placeholder='********' />
                    <input type="submit" value="Sign up" />
                </form>
                <a href="/login">Already have an account? Log in!</a>
            </div>

            <div>
                <h3>You can use Google account to sign up</h3>
            </div>
        </section>
    )
}

