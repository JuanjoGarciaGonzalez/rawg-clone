import React from 'react'
import { useState } from 'react'
import firebaseApp from '../../firebase/FirebaseApp'
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
const auth = getAuth(firebaseApp)

export const RecoverPass = () => {

    const [logging, setLogging] = useState(false)

    const handleRecover = (e) => {
        e.preventDefault()
        setLogging(true)
        const email = document.querySelector('#email').value
        sendPasswordResetEmail(auth, email)
            .then((userCredential) => {
                setLogging(false)
                document.querySelector('.validation-message-check').style.display = 'block'
            })
            .catch((error) => {
                setLogging(false)
                document.querySelector('.validation-message').style.display = 'block'
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
            })
    }

  return (
    <section className='content login padding recover'>
        <h2 className='page-title'>Recover password</h2>

        <form onSubmit={handleRecover}>
            <input type="email" name="email" id="email" placeholder='Email' required/>
            <div className='login-submit'>
                <input type="submit" value="Send recover email" />
                {(logging) && <div className='lds-dual-ring'></div>}
            </div>
        </form>
        <span className='validation-message'>An error has ocurred, please try again!</span>
        <span className='validation-message-check'>The recover email was sent, please check your email inbox!</span>
        <a href="/login">Log in!</a>
    </section>
  )
}