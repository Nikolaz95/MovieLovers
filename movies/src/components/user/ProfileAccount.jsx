import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import TabNavigationProfile from '../other/TabNavigationProfile';
import { useSelector } from 'react-redux';
import { useUploadAvatarMutation } from '../redux/api/userApi';
import toast from 'react-hot-toast';



//import css
import "../user/ProfileAccount.css";


//import img
import avatarDefault from "../../assets/images/avatar-profile.jpg"
/* import avatarDefault from "../../assets/icons/icons-customer.png" */


//import icons
import AddCamera from "../../assets/icons/icons-add-camera.png"


const ProfileAccount = () => {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth);
    const { isAuthenticated } = useSelector((state) => state.auth);


    /* avatar update */
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState(
        user?.avatar ? user?.avatar?.url : avatarDefault
    );

    const [uploadAvatar, { isLoading, error, isSuccess }] = useUploadAvatarMutation();


    /* za login */
    console.log("***************");
    console.log(isAuthenticated);
    console.log("***************");

    console.log("***************");
    console.log(user);
    console.log("***************");

    useEffect(() => {

        if (error) {
            toast.error(error?.data?.message);
        }
        if (isSuccess) {
            toast.success("Avatar Uploaded");
            navigate("/me/profile");
        }


    }, [error, isSuccess]);



    const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            avatar,
        };
        console.log("***************");
        console.log(userData);
        console.log("***************");
    };


    const onChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };



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


                <div className="account-content" onSubmit={submitHandler}>
                    <div className="accoutn-profileImg">
                        <img src={avatarPreview} alt="Personaa" className="Profileimg" />
                        <input
                            type="file"
                            name="file"
                            id="file"
                            accept="image/png, image/jpeg"
                            onChange={onChange}
                        />
                        <label for="file">
                            <img src={AddCamera} alt="Person" className="addCamera" />
                        </label>
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
