import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../layout/Loader';
import toast from 'react-hot-toast';
import MetaData from '../other/MetaData';
import { useRegisterMutation } from '../redux/api/authApi';
import { useSelector } from 'react-redux';

//import css
import "../auth/Register.css";

const Register = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;

    const [register, { isLoading, error, data }] = useRegisterMutation();
    const { isAuthenticated } = useSelector((state) => state.auth);

    console.log("***************");
    console.log(isAuthenticated);
    console.log("***************");

    console.log("***************");
    console.log(data);
    console.log("***************");


    useEffect(() => {
        if (data) {
            toast.success(`Account created successfully. Logging in...`);

            navigate("/me/profile");
        }

        if (error) {
            toast.error(error?.data?.message);
        }
    }, [error, data]);

    const submitHandler = (e) => {
        e.preventDefault();

        const singUpData = {
            name,
            email,
            password,
        }

        register(singUpData);
    };

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    if (isLoading) return <Loader />


    return (
        <>
            <MetaData title={"Create Account"} />
            <section className='cr-acc'>

                <h1 className='title-account'>Create Accunt</h1>

                <div className="content-accountcard">
                    <div className="account-card">
                        <form className='form-registering' onSubmit={submitHandler}>
                            <label htmlFor="name">Your Username:</label>
                            <input type="text" name="name" placeholder='username...'
                                value={name}
                                onChange={onChange}
                            />
                            <br />

                            <label htmlFor="mail">Your Emai:</label>
                            <input type="email" name="email" id='mail' placeholder='fake@email.com'
                                value={email}
                                onChange={onChange}
                            />
                            <br />

                            <label htmlFor="pwd">Password :</label>
                            <input type="password" name="password" id='pwd' placeholder='password...'
                                value={password}
                                onChange={onChange}
                            />

                            <div className="btn-login">
                                <button className="create-accBtn" type="submit" disabled={isLoading}>
                                    {isLoading ? "Creating..." : "Create your accunt"}
                                    {/* Create your accunt */}
                                </button>
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