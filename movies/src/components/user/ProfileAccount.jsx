import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import TabNavigationProfile from '../other/TabNavigationProfile';
import { useSelector } from 'react-redux';




//import css
import "../user/ProfileAccount.css";


//import img
import avatarDefault from "../../assets/images/avatar-profile.jpg"



const ProfileAccount = () => {

    const { user } = useSelector((state) => state.auth);
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <>
            <div className="main-contentProfile">

                <div className="head-AcoutProfile">
                    <h1>Accoutn Profile</h1>
                </div>
                <div className="tabs-contentProfile">
                    {/* <div className="tabs-navigation"> */}
                    <TabNavigationProfile />
                    {/* </div> */}
                </div>


                <div className="account-content">
                    <div className="accoutn-profileImg">
                        <img src={avatarDefault} alt="Personaa" className="Profileimg" />
                    </div>

                    <div className="account-info">
                        <h4>User Name:</h4>
                        <p>{user?.name}</p>

                        <h4>Email Address:</h4>
                        <p>{user?.email}</p>

                        <h4>Joined On</h4>
                        <p>{user?.createdAt?.substring(0, 10)}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileAccount
