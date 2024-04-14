import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import TabNavigationProfile from '../other/TabNavigationProfile';


//import css
/* import "../Profile/ProfileAccount.css"; */
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
                        <p>Your Account Name:</p>
                        <p>NIKOLA</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileAccount
