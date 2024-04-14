import React from 'react'
import { NavLink } from 'react-router-dom';
import TabNavigationProfile from '../other/TabNavigationProfile'


//import css
import "../user/WatchList.css";

//import img
/* import slika from "../../../assets/images/avatar-profile.jpg" */
import film from "../../assets/images/jh.jpg"

//import icons
import AddWatchList from "../../assets/icons/icon-add.png"
import Remove from "../../assets/icons/icons-remove.png"
import AddFavorit from "../../assets/icons/icons-favorite.png"


const WatchList = () => {
    return (
        <div>
            <div className="content-WatchList">

                <div className="head-WatchList">
                    <h1>Your Watch List</h1>
                    <span className='notfi-WatchList'>2</span>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavigationProfile />
                </div>


                {/* content */}
                <div className="watchList-content">
                    {/* card pocetak */}
                    <div className="watchList-card">
                        <div className="allmovies-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="watchList-img" />
                            </NavLink>
                        </div>
                        <div className="watchListcard-bottom">
                            <p className="watchList-name">Mission imposible</p>
                            <p className="watchList-rating">Rating: 2134</p>
                            <button className="watchListicon-favorit"> <img src={AddFavorit} height={30} alt="" />ADD Favorit</button>
                            <div className="btn-addrmv">
                                <button className="watchListadd-btnadd"> <img src={AddWatchList} height={30} alt="" />ADD Wishlist</button>
                                <button className="watchListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* one cart design */}

                    {/* card pocetak */}
                    <div className="watchList-card">
                        <div className="allmovies-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="watchList-img" />
                            </NavLink>
                        </div>
                        <div className="watchListcard-bottom">
                            <p className="watchList-name">Mission imposible</p>
                            <p className="watchList-rating">Rating: 2134</p>
                            <button className="watchListicon-favorit"> <img src={AddFavorit} height={30} alt="" />ADD Favorit</button>
                            <div className="btn-addrmv">
                                <button className="watchListadd-btnadd"> <img src={AddWatchList} height={30} alt="" />ADD Wishlist</button>
                                <button className="watchListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* one cart design */}

                    {/* card pocetak */}
                    <div className="watchList-card">
                        <div className="allmovies-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="watchList-img" />
                            </NavLink>
                        </div>
                        <div className="watchListcard-bottom">
                            <p className="watchList-name">Mission imposible</p>
                            <p className="watchList-rating">Rating: 2134</p>
                            <button className="watchListicon-favorit"> <img src={AddFavorit} height={30} alt="" />ADD Favorit</button>
                            <div className="btn-addrmv">
                                <button className="watchListadd-btnadd"> <img src={AddWatchList} height={30} alt="" />ADD Wishlist</button>
                                <button className="watchListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* one cart design */}

                    {/* card pocetak */}
                    <div className="watchList-card">
                        <div className="allmovies-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="watchList-img" />
                            </NavLink>
                        </div>
                        <div className="watchListcard-bottom">
                            <p className="watchList-name">Mission imposible</p>
                            <p className="watchList-rating">Rating: 2134</p>
                            <button className="watchListicon-favorit"> <img src={AddFavorit} height={30} alt="" />ADD Favorit</button>
                            <div className="btn-addrmv">
                                <button className="watchListadd-btnadd"> <img src={AddWatchList} height={30} alt="" />ADD Wishlist</button>
                                <button className="watchListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* one cart design */}

                    {/* card pocetak */}
                    <div className="watchList-card">
                        <div className="allmovies-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="watchList-img" />
                            </NavLink>
                        </div>
                        <div className="watchListcard-bottom">
                            <p className="watchList-name">Mission imposible</p>
                            <p className="watchList-rating">Rating: 2134</p>
                            <button className="watchListicon-favorit"> <img src={AddFavorit} height={30} alt="" />ADD Favorit</button>
                            <div className="btn-addrmv">
                                <button className="watchListadd-btnadd"> <img src={AddWatchList} height={30} alt="" />ADD Wishlist</button>
                                <button className="watchListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* one cart design */}
                </div>
            </div>
        </div>
    )
}

export default WatchList
