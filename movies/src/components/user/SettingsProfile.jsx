import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDeleteAccountMutation, useUpdateProfileMutation } from '../redux/api/userApi';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';



//import img
import avatarDefault from "../../assets/images/avatar-profile.jpg"
//import icons
import AddCamera from "../../assets/icons/icons-add-camera.png"
import UpdatePicture from "../../assets/icons/icon-save.png"
import CancelUpdPicture from "../../assets/icons/icon-cancelPic.png"
import DeleteAccoutn from "../../assets/icons/delete-account.png"
import SaveUpdate from "../../assets/icons/icon-save.png"
import LogOut from "../../assets/icons/icon-logout2.png"





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
    const [originalName, setOriginalName] = useState(""); // Track original name for cancel update
    const [originalEmail, setOriginalEmail] = useState(""); // Track original name for cancel update



    /* avatar update */
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState(
        user?.avatar ? user?.avatar?.url : avatarDefault);

    /* da sakrije button za sacuvat sliku i otkazat */
    const [isImageSelected, setIsImageSelected] = useState(false);


    const [updateProfile, { isLoading: updateLoading, error: updateError, isSuccess: updateSuccess }] =
        useUpdateProfileMutation();

    /* const [uploadAvatar, { isLoading: uploadLoading, error: uploadError, isSuccess: uploadSuccess }] =
        useUploadAvatarMutation(); */

    const [deleteAccount, { isLoading: deleteLoading, error: deleteError, isSuccess: deleteSuccess }] = useDeleteAccountMutation()



    /* const [uploadAvatar, { isLoading, error, isSuccess }] = useUploadAvatarMutation(); */

    //update user and password
    useEffect(() => {
        if (user) {
            setName(user?.name);
            setOriginalName(user?.name);
            setEmail(user?.email);
            setOriginalEmail(user?.email);
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

    //upload profile img
    useEffect(() => {

        if (updateError) {
            toast.error(updateError?.data?.message);
        }
        if (updateSuccess) {
            toast.success("Avatar Uploaded");
            navigate("/me/profile");
        }


    }, [updateError, updateSuccess]);

    //delete accoutn
    useEffect(() => {
        if (deleteError) {
            toast.error(deleteError?.data?.message);
        }
        if (deleteSuccess) {
            toast.success("Account Deleted");
            navigate("/");
        }
    }, [deleteError, deleteSuccess]);

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


    const cancelUpdate = () => {
        setName(originalName); // Revert back to original name
        toast.error("Cancelled updating username.");
    };

    const cancelUpdateEmail = () => {
        setEmail(originalEmail); // Revert back to original email
        toast.error("Cancelled updating email.", {
            duration: 4000,
        });
    };

    const cancelUpdatePicture = () => {
        setAvatarPreview(user?.avatar ? user?.avatar?.url : avatarDefault);
        setAvatar("");
        setIsImageSelected(false); // Reset isImageSelected state
        toast.error("Cancelled chosen Profile picture.");
        navigate("/me/profile");
    }

    const submitAvatar = (e) => {
        e.preventDefault();

        const userData = {
            avatar,
        };

        console.log("************");
        console.log(userData);
        console.log("************");
        updateProfile(userData)
    };


    /* avatar */
    const onChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
                setIsImageSelected(true); /* da pokaze buttons za sacuvat profil pic ili otkazat */
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleDeleteAccount = () => {
        deleteAccount();
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
                    <form className="profileUpdate-img" /* onSubmit={submitAvatar} */>
                        <img src={avatarPreview} alt="" className="Profileimg-Setting" />
                        <input
                            type="file"
                            name="file"
                            id="file"
                            accept="images/*"
                        /* onChange={onChange} */
                        />
                        <label htmlFor="file">
                            <img src={AddCamera} alt="Person" className="addCamera" />
                        </label>

                        <div className="btn-updatePicture">
                            {isImageSelected && (
                                <>
                                    <button className="buttons-updPicture" onClick={submitAvatar} disabled={updateLoading}>
                                        Save picture <img src={UpdatePicture} alt="Person" className="savePicture" />
                                    </button>
                                    <button className="buttons-cancelUpdPic" onClick={cancelUpdatePicture} disabled={updateLoading}>
                                        Cancel  <img src={CancelUpdPicture} alt="Person" className="cancelUpdPic" />
                                    </button>
                                </>
                            )}
                        </div>
                    </form>

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
                                <>
                                    <button className="buttons-updUsername" onClick={updUsername} disabled={updateLoading}>
                                        {updateLoading ? "Updating...." : "Update Username"}
                                    </button>
                                    <button className="buttons-cancelUpdname" onClick={cancelUpdate}>
                                        Cancel Update
                                    </button>
                                </>
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
                                <>
                                    <button className="buttons-email" onClick={updEmail} disabled={updateLoading}>
                                        {updateLoading ? "Updating...." : "Update email"}
                                    </button>
                                    <button className="buttons-cancelUpdname" onClick={cancelUpdateEmail}>
                                        Cancel Update
                                    </button>
                                </>
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

                    <div className="buttons-button">
                        <button className="buttons-save" >
                            {updateLoading ? "Updating...." : "Update Password"} <img src={SaveUpdate} alt="saveUpdate" className="iconbtn" />
                        </button>

                        <button className="buttons-delete" onClick={handleDeleteAccount} disabled={deleteLoading}>
                            {deleteLoading ? "Deleting..." : "Delete Account"} <img src={DeleteAccoutn} alt="deleteAccount" className="iconbtn" />
                        </button>

                        <button className="buttons-lgout">
                            Log Out <img src={LogOut} alt="logOut" className="iconbtn" />
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SettingsProfile
