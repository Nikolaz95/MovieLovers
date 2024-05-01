import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUpdateProfileMutation, useUploadAvatarMutation } from '../redux/api/userApi';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';



//import img
import avatarDefault from "../../assets/images/avatar-profile.jpg"
//import icons
import AddCamera from "../../assets/icons/icons-add-camera.png"

//import css
import "../user/SettingsProfile.css";
import TabNavigationProfile from '../other/TabNavigationProfile';

const SettingsProfile = () => {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth);
    const { isAuthenticated } = useSelector((state) => state.auth);
    //update name i email
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [updateProfile, { isLoading: updateLoading, error: updateError, isSuccess: updateSuccess }] =
        useUpdateProfileMutation();
    const [uploadAvatar, { isLoading: uploadLoading, error: uploadError, isSuccess: uploadSuccess }] =
        useUploadAvatarMutation();

    /* avatar update */
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState(
        user?.avatar ? user?.avatar?.url : avatarDefault
    );


    /* const [uploadAvatar, { isLoading, error, isSuccess }] = useUploadAvatarMutation(); */

    useEffect(() => {
        if (user) {
            setName(user?.name);
            setEmail(user?.email);
        }
        if (updateError) {
            console.error("Error updating profile:", updateError);
            toast.error(updateError?.data?.message);
        }
        if (updateSuccess) {
            toast.success("User Updated");
            navigate("/me/profile");
        }


    }, [user, updateError, updateSuccess]);

    useEffect(() => {

        if (uploadError) {
            toast.error(uploadError?.data?.message);
        }
        if (uploadSuccess) {
            toast.success("Avatar Uploaded");
            navigate("/me/profile");
        }


    }, [uploadError, uploadSuccess]);

    const updUsername = (e) => {
        e.preventDefault();
        const userData = {
            name,
        }
        updateProfile(userData);
    };

    const updEmail = (e) => {
        e.preventDefault();
        const userData = {
            email,
        }
        updateProfile(userData);
    };

    const submitAvatar = (e) => {
        e.preventDefault();

        const file = e.target.files[0]; // Get the selected file from the event
        setAvatar(file);

        console.log("***************");
        console.log(file);
        console.log("***************");
    };


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
                        <img src={avatarPreview} alt="" className="Profileimg-Setting" />
                        <input
                            type="file"
                            name="file"
                            id="file"
                            accept="image/png, image/jpeg"
                            onChange={submitAvatar}
                        />
                        <label for="file">
                            <img src={AddCamera} alt="Person" className="addCamera" />
                        </label>
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


                        <div className="btn-update">
                            {name !== user?.name && (
                                <button className="buttons-updUsername" onClick={updUsername} disabled={updateLoading}>
                                    {updateLoading ? "Updating...." : "Update Username"}
                                </button>
                            )}
                        </div>


                        <label>Email: <br />
                            <input type="email"
                                placeholder='fake@email.com.....'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>


                        <div className="btn-update">
                            {email !== user?.email && (
                                <button className="buttons-email" onClick={updEmail} disabled={updateLoading}>
                                    {updateLoading ? "Updating...." : "Update email"}
                                </button>
                            )}
                        </div>


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
                        <button className="buttons-save" /* onClick={submitHandler} */ /* disabled={updateLoading} */ >
                            {updateLoading ? "Updating...." : "Update Password"}
                        </button>
                        <button className="buttons-delete" >
                            Delete account
                        </button>
                        <button className="buttons-lgout" >
                            Log Out
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SettingsProfile
