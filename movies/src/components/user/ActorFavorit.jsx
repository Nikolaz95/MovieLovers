import React from 'react'
import { NavLink } from 'react-router-dom';
import TabNavigationProfile from '../other/TabNavigationProfile';

//import css
import "../user/ActorFavorit.css";

//import icons
/* import Profile from "../../../assets/icons/icons-customer.png" */
/* import AddWatchList from "../../../assets/icons/icon-add.png" */
import AddFavorit from "../../assets/icons/icons-favorite.png"
import Remove from "../../assets/icons/icons-remove.png"
/* import Rating from "../../../assets/icons/icons-star.png" */
/* import ActorFavorit from "../../../assets/icons/icons-actor.png" */
/* import Settings from "../../../assets/icons/icons-gear.png"
 */
//import img
import Actor from "../../assets/images/Tom-Cruise.jpg"

const ActorFavorit = () => {
    return (
        <div>

            <div className="content-FavActor">

                <div className="head-FavActor">
                    <h1>Your Favort Actors List</h1>
                    <span className='notfi-FavActor'>2</span>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavigationProfile />
                </div>

                {/* content */}
                <div className="FavActor-content">
                    {/* card pocetak */}
                    <div className="FavActor-card">
                        <div className="FavActor-cardtop">
                            <NavLink to="">
                                <img src={Actor} alt="" className="FavActor-img" />
                            </NavLink>
                        </div>
                        <div className="FavActor-bottom">
                            <div className="FavActor-info">
                                <p className="FavActor-title">Name of actor:</p>
                                <p className="FavActor-title">Tom Cruise</p>
                            </div>
                            <div className="btnFavActor-addrmv">
                                <button className="FavActoadd-btnrmv"> <img src={Remove} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj za card */}

                    {/* card pocetak */}
                    <div className="FavActor-card">
                        <div className="FavActor-cardtop">
                            <NavLink to="">
                                <img src={Actor} alt="" className="FavActor-img" />
                            </NavLink>
                        </div>
                        <div className="FavActor-bottom">
                            <div className="FavActor-info">
                                <p className="FavActor-title">Name of actor:</p>
                                <p className="FavActor-title">Tom Cruise</p>
                            </div>
                            <div className="btnFavActor-addrmv">
                                <button className="FavActoadd-btnrmv"> <img src={Remove} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj za card */}

                    {/* card pocetak */}
                    <div className="FavActor-card">
                        <div className="FavActor-cardtop">
                            <NavLink to="">
                                <img src={Actor} alt="" className="FavActor-img" />
                            </NavLink>
                        </div>
                        <div className="FavActor-bottom">
                            <div className="FavActor-info">
                                <p className="FavActor-title">Name of actor:</p>
                                <p className="FavActor-title">Tom Cruise</p>
                            </div>
                            <div className="btnFavActor-addrmv">
                                <button className="FavActoadd-btnrmv"> <img src={Remove} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj za card */}

                    {/* card pocetak */}
                    <div className="FavActor-card">
                        <div className="FavActor-cardtop">
                            <NavLink to="">
                                <img src={Actor} alt="" className="FavActor-img" />
                            </NavLink>
                        </div>
                        <div className="FavActor-bottom">
                            <div className="FavActor-info">
                                <p className="FavActor-title">Name of actor:</p>
                                <p className="FavActor-title">Tom Cruise</p>
                            </div>
                            <div className="btnFavActor-addrmv">
                                <button className="FavActoadd-btnrmv"> <img src={Remove} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj za card */}

                    {/* card pocetak */}
                    <div className="FavActor-card">
                        <div className="FavActor-cardtop">
                            <NavLink to="">
                                <img src={Actor} alt="" className="FavActor-img" />
                            </NavLink>
                        </div>
                        <div className="FavActor-bottom">
                            <div className="FavActor-info">
                                <p className="FavActor-title">Name of actor:</p>
                                <p className="FavActor-title">Tom Cruise</p>
                            </div>
                            <div className="btnFavActor-addrmv">
                                <button className="FavActoadd-btnrmv"> <img src={Remove} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj za card */}
                </div>


            </div>
        </div>


    )
}

export default ActorFavorit
