import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import TabNavigationProfile from '../other/TabNavigationProfile';


//import css
import "../user/ProfileAccount.css";


//import img
import slika from "../../assets/images/avatar-profile.jpg"

//import icons
import AddCamera from "../../assets/icons/icons-add-camera.png"


const ProfileAccount = () => {


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
                        <p>joe</p>
                        {/* <p>{user?.name}</p> */}

                        <h4>Email Address:</h4>
                        <p>n@gmail.com</p>
                        {/* <p>{user?.email}</p> */}

                        <h4>Joined On</h4>
                        <p>2024-04-18</p>
                        {/* <p>{user?.createdAt?.substring(0, 10)}</p> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileAccount
