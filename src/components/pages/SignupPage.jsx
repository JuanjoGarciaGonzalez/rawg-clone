import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { firebaseApp, db } from '../../firebase/FirebaseApp'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp)

console.log(db)

export const SignupPage = () => {

    const [logging, setLogging] = useState(false)

    const handleSignup = (e) => {
        e.preventDefault()
        setLogging(true)
        const email = document.querySelector('#email').value
        const pass = document.querySelector('#pass').value
        const name = document.querySelector('#name').value

        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                return addDoc(collection(db, "users"), {
                    email: email,
                    name: name,
                    uid: userCredential.user.uid,
                    games: []
                })
            })
            .then(() => {
                setLogging(false);
                window.location.href = '/profile';
            })
            .catch((error) => {
                document.querySelector('.validation-message').style.display = 'block'
                setLogging(false)
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
            })
    }

    const googleSignUp = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            return addDoc(collection(db, "users"), {
                email: user.email,
                name: user.displayName,
                uid: user.uid,
                games: [] 
            });
        })
        .then(() => {
            window.location.href = '/profile';
        })
        .catch((error) => {
                document.querySelector('.validation-message').style.display = 'block'
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
        })
    }

    useEffect(() => {
        const main = document.querySelector('main')
        document.querySelector('.sidebar').style.display = 'none'

        if(main != null) {
            main.style.backgroundImage = 'linear-gradient(180deg, rgba(21, 21, 21, 1) 0%, rgba(21,21,21,0.8541911764705882) 0%, rgba(21,21,28,1) 100%),url(../../public/register.jpg)' 
            main.style.backgroundSize = 'cover'
            main.style.backgroundPosition = 'center'
            main.style.backgroundRepeat = 'no-repeat'
            main.classList.add('game-page-bg')
        }

        
        
      })


    return (
        <section className='content login padding'>
            <div>
                <h2 className='page-title'>Signup</h2>
                <form onSubmit={handleSignup}>
                    <input type="email" name="email" id="email" placeholder='Email' required/>
                    <input type="text" name="name" id="name" placeholder='Username' required/>
                    <input type="password" name="pass" id="pass" placeholder='********' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$" title="La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un número." required />
                    <div className='login-submit'>
                        <input type="submit" value="Sign Up" />
                        {(logging) && <div className='lds-dual-ring'></div>}
                    </div>
                </form>
                <span className='validation-message'>A problem has ocurred, please try again!</span>
                <a href="/login">Already have an account? Log in!</a>
            </div>

            <div>
                <h3>You can use your<br/>Google account<br/> to sign up</h3>
                <button className="google-button" onClick={googleSignUp}>
                    <img width="20px"  alt="Google sign-up" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" />
                Continue with Google</button>
            </div>
        </section>
    )
}

