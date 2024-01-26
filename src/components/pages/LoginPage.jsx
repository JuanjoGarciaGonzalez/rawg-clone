import React from 'react'
import firebaseApp from '../../firebase/FirebaseApp'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
const auth = getAuth(firebaseApp)

export const LoginPage = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const email = document.querySelector('#email').value
        const pass = document.querySelector('#pass').value
        signInWithEmailAndPassword(auth, email, pass)
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
                <h2 className='page-title'>Log in</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="password" name="pass" id="pass" placeholder='********' />
                    <input type="submit" value="Log in" />
                </form>
                <a href="/signup">Don't have an account? Sign up!</a>
                <a href="/recover-pass">Forgot your password?</a>
            </div>

            <div>
                <h3>You can use Google account to log in</h3>
            </div>
        </section>
    )
}

