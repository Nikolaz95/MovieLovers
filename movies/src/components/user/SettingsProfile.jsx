import React from 'react'



//import img
import slika from "../../assets/images/avatar-profile.jpg"
//import icons
import AddCamera from "../../assets/icons/icons-add-camera.png"

//import css
import "../user/SettingsProfile.css";
import TabNavigationProfile from '../other/TabNavigationProfile';

const SettingsProfile = () => {
    return (
        <div className="header-Settings">
            <div className="head-WatchList">
                <h1>Profile Settings</h1>
            </div>
            <div className="tabs-contentProfile">
                <TabNavigationProfile />
            </div>


            <div className="content-update">
                <div className="profileUpdate-kontainer">
                    <div className="profileUpdate-img">
                        <img src={slika} alt="" className="Profileimg-Setting" />
                        <img src={AddCamera} alt="Person" className="addCamera-Setting" />
                    </div>

                    <form action="" className='form-updateProfile'>
                        <label>Your Account Name: <br />
                            <input type="text"
                                placeholder='account name...' />
                        </label>
                        <label>Old Password: <br />
                            <input type="password"
                                placeholder='old password...' />
                        </label>

                        <label>New Password: <br />
                            <input type="password"
                                placeholder='new password...' />
                        </label>


                        <label>Confirm New Password: <br />
                            <input type="password"
                                placeholder='confirm new password...' />
                        </label>

                    </form>

                    <div className="buttons-update">
                        <button className="buttons-save" >Save update</button>
                        <button className="buttons-delete" >Delete account</button>
                        <button className="buttons-lgout" >Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsProfile
