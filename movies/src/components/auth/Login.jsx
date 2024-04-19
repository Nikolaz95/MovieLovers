import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../layout/Loader';
import toast from 'react-hot-toast';




//import css
import "../auth/Login.css";
import MetaData from '../other/MetaData';
import { useLoginMutation } from '../redux/api/authApi';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, { isLoading, error, data }] = useLoginMutation();

    console.log("***************");
    console.log(data);
    console.log("***************");

    if (isLoading) return <Loader />

    useEffect(() => {
        if (error) {
            toast.error(error?.data?.message)
        }
    }, [error]);



    const submitHandler = (e) => {
        e.preventDefault();

        const loginData = {
            email,
            password,
        }

        login(loginData);
    }

    return (
        <>
            <MetaData title={"Log in"} />
            <section className="registering-section">

                <h1 className='title-registering'>Sign in</h1>
                <div className="card-registering">

                    <div className="lef-registering">
                        <form className='form-registering' onSubmit={submitHandler}>
                            <label htmlFor="mail">Your Email:</label>
                            <input type="email" id='mail' placeholder='fake@email...'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />



                            <label htmlFor="pwd">Password :</label>
                            <input type="password" id='pwd' placeholder='password...'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <div className="btn-login">
                                <button type="submit" className="login" disabled={isLoading}>
                                    {/* Log in */}
                                    {isLoading ? "Authenticating..." : "LOGIN"}
                                </button>
                            </div>
                        </form>


                        <div className="divider-text">
                            <span>Or:</span>
                        </div>


                        <NavLink to="/registration">
                            <div className="btn-registering">
                                <button className="create-acc">Create a New Accoutn</button>
                            </div>
                        </NavLink>

                    </div>

                    <div className="right-registering">
                        <h1 className="registering-title">Benefits of your free  account</h1>
                        <p>Personalized Recommendations</p>

                        <h1 className="registering-title">Your Watchlist</h1>
                        <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>

                        <h1 className="registering-title">Your Favorit list</h1>
                        <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Login