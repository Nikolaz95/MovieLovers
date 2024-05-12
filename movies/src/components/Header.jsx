import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useGetMeQuery } from './redux/api/userApi'
import { useSelector } from 'react-redux'
import { useLazyLogoutQuery } from './redux/api/authApi'



//import slike
import Logo2 from "../assets/images/logo2.png"
import Icon1 from "../assets/images/icons8-clapperboard-48.png"
import Search from "../assets/icons/icon-search.png"
import LogIn from "../assets/icons/icon-login.png"
import TvShows from "../assets/icons/icon-tvs.png"
/* import avatarDefault from "../assets/icons/icons-customer.png" */
import avatarDefault from "../assets/images/avatar-profile.jpg"


import DashBoard from "../assets/icons/icon-dashboard.png"
import iconUser from "../assets/icons/icon2-user.png"
import Logout from "../assets/icons/icon-logout.png"



//import css
import "../components/Header.css";

//icon import 
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";


const Header = () => {
    const navigate = useNavigate()
    const [logout] = useLazyLogoutQuery();
    const { user } = useSelector((state) => state.auth);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(null);

    const toggleSideMenu = () => {
        setIsSideMenuOpen((prevSideMenuOpen) => !prevSideMenuOpen);
    }


    const [dropDown, setDropDown] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [userName, setUserName] = useState('');
    const [unsubscribe, setUnsubscribe] = useState(null);

    const toggleDropDown = () => {
        console.log('Toggling dropdown');
        setDropDown(!dropDown);
    };

    const logoutHandler = () => {
        logout();
        navigate(0);
    };

    const { isLoading } = useGetMeQuery();



    /* const toggleSideMenu = () => {
        console.log('Toggling side menu');
        setIsSideMenuOpen(!isSideMenuOpen);
    }; */

    useEffect(() => {
        const closeMenuOnOutsideClick = (e) => {
            if (dropDown) {
                const dropdownWrapper = document.querySelector('.dropdown-wrapper');
                const dropdownContent = document.querySelector('.dropdown-content');

                if (
                    dropdownWrapper &&
                    dropdownContent &&
                    !e.target.closest('.dropdown-wrapper') &&
                    !e.target.closest('.dropdown-content')
                ) {
                    setDropDown(false);
                }
            }
            if (isSideMenuOpen) {
                if (!e.target.closest('.navbar') && !e.target.closest('.ham-menu')) {
                    setIsSideMenuOpen(false);

                } else {

                }
                document.querySelector(".content-body").className.add("content_body_top_30");

            } else {
                document.querySelector(".content-body").className.remove("content_body_top_30");

            }

        };

        // Attach the event listener
        document.addEventListener('click', closeMenuOnOutsideClick);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', closeMenuOnOutsideClick);
        };
    }, [dropDown, isSideMenuOpen]);



    return (
        <header>
            <div className="content-header">

                <NavLink href="/" className="logo no-underline">
                    <img src={Logo2} height={100} width={100} alt="" />
                </NavLink>


                <div className={`navbar ${isSideMenuOpen ? 'active' : 'close'}`} >
                    <ul>

                        <li>
                            <NavLink to="/movies" className='navigation-style'>
                                Movies <img src={Icon1} alt="" className='icon-navigation' />
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/tvshows">
                                TV Shows <img src={TvShows} alt="" className='icon-navigation' />
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/search">
                                Search <img src={Search} alt="" className='icon-navigation' />
                            </NavLink>
                        </li>

                        {user ? (

                            <li onClick={() => setShowDropdown(!showDropdown)} >
                                <div className="UserNavbar">
                                    <figure>
                                        <img /* src={avatarDefault} */
                                            src={user?.avatar ? user?.avatar?.url : avatarDefault} alt={user?.name}
                                            className="userIcon"
                                        />
                                    </figure>
                                    <p>{user?.name}</p>
                                    <FaArrowRight className={showDropdown ? "arrowDrpUser rotatedArrowUser" : "arrowDrpUser"} />
                                </div>
                                {showDropdown && (

                                    <div className="dropDownUser" >
                                        <ul>
                                            <li className='dropDownUser-section'>
                                                <NavLink to="/sada" className="dropDownUser-icon">
                                                    <img src={DashBoard} width={30} height={30} alt="" />
                                                    Dashbord
                                                </NavLink>
                                            </li>

                                            <li className='dropDownUser-section'>
                                                <NavLink to="/me/profile" className="dropDownUser-icon">
                                                    <img src={iconUser} width={30} height={30} alt="" />
                                                    Profile
                                                </NavLink>
                                            </li>

                                            <li className='dropDownUser-section'>
                                                <NavLink to="/" className="dropDownUser-icon" onClick={logoutHandler}>
                                                    <img src={Logout} width={30} height={30} alt="" />
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ) : (
                            !isLoading && (
                                <li>
                                    <NavLink to="/login">
                                        Sing in <img src={LogIn} alt="" className='icon-navigation' />
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div onClick={toggleSideMenu} className={`ham-menu ${isSideMenuOpen === true ? "active" : null} ${isSideMenuOpen === false ? "close" : null}`}>
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                </div>
            </div>
        </header>
    )
}

export default Header
