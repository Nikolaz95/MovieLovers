import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUpdateProfileMutation } from '../redux/api/userApi';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';



//import img
import slika from "../../assets/images/avatar-profile.jpg"
//import icons
import AddCamera from "../../assets/icons/icons-add-camera.png"

//import css
import "../user/SettingsProfile.css";
import TabNavigationProfile from '../other/TabNavigationProfile';

const SettingsProfile = () => {
    const navigate = useNavigate()
    //update name i email
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [updateProfile, { isLoading, error, isSuccess }] =
        useUpdateProfileMutation();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            setName(user?.name);
            setEmail(user?.email);
        }
        if (error) {
            toast.error(error?.data?.message);
        }
        if (isSuccess) {
            toast.success("User Updated");
            navigate("/me/profile");
        }


    }, [user, error, isSuccess]);

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
        }

        updateProfile(userData);
    }



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
                                placeholder='account name...'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <label>Email: <br />
                            <input type="email"
                                placeholder='fake@email.com.....'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>


                        <label>Old Password: <br />
                            <input type="password"
                                placeholder='old password...' />
                        </label>

                        <label>New Password: <br />
                            <input type="password"
                                placeholder='new password...' />
                        </label>

                    </form>

                    <div className="buttons-update">
                        <button className="buttons-save" onClick={submitHandler} /* disabled={isLoading} */ >
                            {isLoading ? "Updating...." : "Save update"}
                        </button>
                        <button className="buttons-delete" >
                            Delete account
                        </button>
                        <button className="buttons-lgout" >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsProfile
