import React from 'react'
import firebaseApp from '../../firebase/FirebaseApp'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
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

    const googleLogin = () => {
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
                <h2 className='page-title'>Log in</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" id="email" placeholder='Email' required/>
                    <input type="password" name="pass" id="pass" placeholder='********' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$" title="La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un número." required />
                    <input type="submit" value="Log in" />
                </form>
                <a href="/signup">Don't have an account? Sign up!</a>
                <a href="/recover-pass">Forgot your password?</a>
            </div>

            <div>
                <h3>You can use Google account to log in</h3>
                <button className="google-button" onClick={googleLogin}>
                    <img width="20px"  alt="Google sign-in" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" />
                Continue with Google</button>
            </div>
        </section>
    )
}

