import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { firebaseApp } from '../../firebase/FirebaseApp'
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

    useEffect(() => {
        const main = document.querySelector('main')
        document.querySelector('.sidebar').style.display = 'none'

        if(main != null) {
            main.style.backgroundImage = 'linear-gradient(180deg, rgba(21, 21, 21, 1) 0%, rgba(21,21,21,0.8541911764705882) 0%, rgba(21,21,28,1) 100%),url(../../public/recover-pass.jpg)' 
            main.style.backgroundSize = 'cover'
            main.style.backgroundPosition = 'center'
            main.style.backgroundRepeat = 'no-repeat'
            main.classList.add('game-page-bg')
        }
    })

  return (
    <section className='content login padding'>

        <div>
            <h2 className='page-title'>Recover<br/> password</h2>
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
        </div>
        
        <div>
            <h3>You will receive an email<br/> with a password-reset link</h3>
        </div>
    </section>
  )
}