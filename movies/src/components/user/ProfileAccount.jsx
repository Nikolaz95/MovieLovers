import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import TabNavigationProfile from '../other/TabNavigationProfile';
import { useSelector } from 'react-redux';


//import css
import "../user/ProfileAccount.css";


//import img
import slika from "../../assets/images/avatar-profile.jpg"
import avatarDefault from "../../assets/icons/icons-customer.png"


//import icons
import AddCamera from "../../assets/icons/icons-add-camera.png"


const ProfileAccount = () => {

    const { user } = useSelector((state) => state.auth);

    const { isAuthenticated } = useSelector((state) => state.auth);

    console.log("***************");
    console.log(isAuthenticated);
    console.log("***************");

    console.log("***************");
    console.log(user);
    console.log("***************");



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
                        <img src={slika} alt="Person" className="Profileimg" />
                        <img src={AddCamera} alt="Person" className="addCamera" />
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
