import React from 'react'
import { NavLink } from 'react-router-dom'

//import css
import "../auth/Register.css";
import MetaData from '../other/MetaData';

const Register = () => {
    return (
        <>
            <MetaData title={"Create Account"} />
            <section className='cr-acc'>

                <h1 className='title-account'>Create Accunt</h1>

                <div className="content-accountcard">
                    <div className="account-card">
                        <form className='form-registering' >
                            <label htmlFor="name">Your Username:</label>
                            <input
                                type="text"
                                id='name'
                                placeholder='username...'
                            /> <br />
                            <p className="username-sucCr">Your username is valid</p>
                            <p className="username-errorCr">Your username is not valid</p>
                            <label htmlFor="mail">Your Emai:</label>
                            <input
                                type="email"
                                id='mail'
                                placeholder='fake@email.com'
                            /> <br />
                            <span className="email-sucCr">Your email is valid</span>
                            <span className="email-errorCr">Your email is not valid</span>
                            <label htmlFor="pwd">Password :</label>
                            <input
                                type="password"
                                id='pwd'
                                placeholder='password...'
                            />
                            <span className="passw-sucCr">Your password is valid</span>
                            <span className="passw-errorCr">Your password is not valid</span>
                            <div className="btn-login">
                                <button /* onClick={createAcc} */ className="create-accBtn">Create your accunt</button>
                            </div>
                        </form>
                    </div>
                    <p>You already have account ?</p>

                    <NavLink to="/login" className="singIn">
                        <p>Sing In {/* <FaArrowRight className='arow-singin' /> */}</p>
                    </NavLink>
                </div>
            </section>

        </>
    )
}

export default Register