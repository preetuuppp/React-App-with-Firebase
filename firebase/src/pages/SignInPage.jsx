import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase';

const SignInPage = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            alert('sign in success')
        }).catch((err) => console.log(err))
    }

    return (
        <div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Enter Your Email</label>
                <div className="col-sm-10">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="staticEmail" value={email} required />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Enter Your Password</label>
                <div className="col-sm-10">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword" value={password} required />
                </div>
            </div>

            <button onClick={signInUser}>Sign In</button>
        </div>
    )
}

export default SignInPage