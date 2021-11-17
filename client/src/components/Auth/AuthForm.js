import React from 'react';
import './AuthForm.css';

const AuthForm = () => {
    // const [usernameReg, setUsernameReg] = useState('')
    // const [passwordReg, setPasswordReg] = useState('')

    return (
        <div className="form__container">
            <h1 className="login-title"> Incident Tracker </h1>
            <form className="login-form">
                <input
                    type="text"
                    placeholder="Create a username"
                    onchange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
                <br />
                <input
                    type="password"
                    placeholder="Create a Password"
                    // onchange={(e) => {
                    //     setPasswordReg(e.target.value);
                    // }}
                />
                <br />
                <button>Register</button>
                <br />
                <br />
                 <input
                    type="text"
                    placeholder="Username"
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                />
                <br />
                <button>Sign In</button>
            </form>
                
        </div>
    )
}

export default AuthForm
