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
                            <input type="text" placeholder='username...' /> <br />

                            <label htmlFor="mail">Your Emai:</label>
                            <input type="email" id='mail' placeholder='fake@email.com' /> <br />

                            <label htmlFor="pwd">Password :</label>
                            <input type="password" id='pwd' placeholder='password...' />

                            <div className="btn-login">
                                <button className="create-accBtn">Create your accunt</button>
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