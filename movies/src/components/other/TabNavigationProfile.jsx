import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


//import css
import "../other/TabNavigationProfile.css";

//import icons
import Profile from "../../assets/icons/icons-customer.png"
import AddWatchList from "../../assets/icons/icon-add.png"
import AddFavorit from "../../assets/icons/icons-favorite.png"
import Rating from "../../assets/icons/icons-star.png"
import ActorFavorit from "../../assets/icons/icons-actor.png"
import Settings from "../../assets/icons/icons-gear.png"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import MetaData from './MetaData';



const TabNavigationProfile = () => {

    const getTitleBasedOnActiveTab = (tab) => {
        switch (tab) {
            case 'Profile':
                return 'Account Profile';
            case 'YourWatchList':
                return 'Your Watch List';
            case 'YourFavoritList':
                return 'Your Favorit List';
            case 'YourRatings':
                return 'Your Ratings List';
            case 'FavoritActor':
                return 'Your Favorite Actors List';
            case 'Settings':
                return 'Profile Settings';
            default:
                return '';
        }
    };


    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        document.title = getTitleBasedOnActiveTab(activeTab) + ' - Movie Lovers';
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };



    const handleArrowClick = (direction) => {
        // Logic to scroll tabs based on the direction
        const tabsContainer = document.querySelector('.tabs-navigation ul');
        const scrollAmount = direction === 'left' ? -200 : 200;
        tabsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };


    return (

        <>
            <MetaData title={getTitleBasedOnActiveTab(activeTab)} />

            <div className="tabs-navigation">
                {/* <div className="tabs-navigation-arrows" onClick={() => handleArrowClick('left')}>
                <span ><FaArrowAltCircleLeft className="arrow-left" />
                </span>
            </div> */}
                <ul className='navbar-content'>
                    <li className={activeTab === 'Profile' ? 'active' : ''}>
                        <NavLink to="/me/profile" onClick={() => handleTabClick('Profile')} >
                            <span className='icon'><img src={Profile} height={30} alt="" /></span>
                            <span className='text'>Profile</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'YourWatchList' ? 'active' : ''}>
                        <NavLink to="/me/watchList" onClick={() => handleTabClick('YourWatchList')} >
                            <span className='icon'><img src={AddWatchList} height={30} alt="" /></span>
                            <span className='text'>Your Watch List</span>
                            <span className='notification'>2</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'YourFavoritList' ? 'active' : ''}>
                        <NavLink to="/me/favoritList" onClick={() => handleTabClick('YourFavoritList')}>
                            <span className='icon'><img src={AddFavorit} height={30} alt="" /></span>
                            <span className='text'>Your Favorit List</span>
                            <span className='notification'>2</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'YourRatings' ? 'active' : ''}>
                        <NavLink to="/me/ratingList" onClick={() => handleTabClick('YourRatings')}>
                            <span className='icon'><img src={Rating} height={30} alt="" /></span>
                            <span className='text'>Your Ratings</span>
                            <span className='notification'>2</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'FavoritActor' ? 'active' : ''}>
                        <NavLink to="/me/favoritActor" onClick={() => handleTabClick('FavoritActor')}>
                            <span className='icon'><img src={ActorFavorit} height={30} alt="" /></span>
                            <span className='text'>Favorit Actor</span>
                            <span className='notification'>2</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'Settings' ? 'active' : ''}>
                        <NavLink to="/me/settings" onClick={() => handleTabClick('Settings')}>
                            <span className='icon'><img src={Settings} height={30} alt="" /></span>
                            <span className='text'>Settings</span>
                        </NavLink>
                    </li>
                </ul>
                {/* <div className="tabs-navigation-arrows" onClick={() => handleArrowClick('right')}>
                <span ><FaArrowAltCircleRight className="arrow-right" />
                </span>
            </div> */}
            </div>

        </>

    )
}

export default TabNavigationProfile
