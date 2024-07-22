import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
import SignInPage from './SignInPage';

const SignUpPage = () => {
    const auth = getAuth(app);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((res) =>
            alert('Success')
        )
    }

    return (
        <>
            <div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="staticEmail" value={email} required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword" value={password} required />
                    </div>
                </div>

                <button onClick={createUser}>Sign Up</button>
            </div>


            <SignInPage />
        </>
    )
}

export default SignUpPage