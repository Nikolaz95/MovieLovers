import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../layout/Loader';
import toast from 'react-hot-toast';
import MetaData from '../other/MetaData';
import { useLoginMutation } from '../redux/api/authApi';




//import css
import "../auth/Login.css";

//import  icon
import Show from "../../assets/icons/icon-show.png"
import Hide from "../../assets/icons/icon-hide.png"
import { useSelector } from 'react-redux';


const Login = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [login, { isLoading, error, data, isSuccess }] = useLoginMutation();
    const { isAuthenticated } = useSelector((state) => state.auth);

    console.log("***************");
    console.log(isAuthenticated);
    console.log("***************");

    console.log("***************");
    console.log(data);
    console.log("***************");


    useEffect(() => {

        if (isAuthenticated) {
            toast.success(`Welcome ${user?.name}`, {
                style: {
                    backgroundColor: "green",
                    color: "#ffffff",
                },
            });
            navigate("/profile")
        }

        if (error) {
            toast.error(error?.data?.message);
        }
    }, [isAuthenticated, error, navigate]);



    const submitHandler = (e) => {
        e.preventDefault();

        const loginData = {
            email,
            password,
        }

        login(loginData);
    }

    if (isLoading) return <Loader />

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
                            <div className="pasword-content">
                                <input type={showPassword ? "text" : "password"} id='pwd' placeholder='password...'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <img
                                    title={showPassword ? "Hide password" : "Show password"}
                                    src={showPassword ? Hide : Show}
                                    onClick={() => setShowPassword(prevState => !prevState)}
                                />
                            </div>

                            <div className="btn-login">
                                <button type="submit" className="login" disabled={isLoading}>
                                    {isLoading ? "Authenticating..." : "Log in"}
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