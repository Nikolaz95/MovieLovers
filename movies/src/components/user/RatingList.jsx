import React from 'react'
import { NavLink } from 'react-router-dom';
import TabNavigationProfile from '../other/TabNavigationProfile';




import film from "../../assets/images/jh.jpg"


//import css
import "../user/RatingList.css";

//import icons
import AddWatchList from "../../assets/icons/icon-add.png"
import Remove from "../../assets/icons/icons-remove.png"
import AddFavorit from "../../assets/icons/icons-favorite.png"
import Rating from "../../assets/icons/icons-star.png"



const RatingList = () => {
    return (
        <div>
            <div className="content-RatingList">
                <div className="head-RatingList">
                    <h1>Your Watch List</h1>
                    <span className='notfi-RatingList'>2</span>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavigationProfile />
                </div>

                <div className="RatingList-content">
                    {/* pocetak carda */}
                    <div className="RatingList-card">
                        <div className="allmoviesRatingList-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="RatingList-img" />
                            </NavLink>
                        </div>
                        <div className="RatingListcard-bottom">
                            <p className="RatingList-name">Mission imposible</p>
                            <p className="RatingList-rating">Your rating: 5125</p>
                            <div className="btnRatingList-addrmv">
                                <button className="RatingListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj carda */}

                    {/* pocetak carda */}
                    <div className="RatingList-card">
                        <div className="allmoviesRatingList-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="RatingList-img" />
                            </NavLink>
                        </div>
                        <div className="RatingListcard-bottom">
                            <p className="RatingList-name">Mission imposible</p>
                            <p className="RatingList-rating">Your rating: 5125</p>
                            <div className="btnRatingList-addrmv">
                                <button className="RatingListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj carda */}

                    {/* pocetak carda */}
                    <div className="RatingList-card">
                        <div className="allmoviesRatingList-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="RatingList-img" />
                            </NavLink>
                        </div>
                        <div className="RatingListcard-bottom">
                            <p className="RatingList-name">Mission imposible</p>
                            <p className="RatingList-rating">Your rating: 5125</p>
                            <div className="btnRatingList-addrmv">
                                <button className="RatingListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj carda */}

                    {/* pocetak carda */}
                    <div className="RatingList-card">
                        <div className="allmoviesRatingList-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="RatingList-img" />
                            </NavLink>
                        </div>
                        <div className="RatingListcard-bottom">
                            <p className="RatingList-name">Mission imposible</p>
                            <p className="RatingList-rating">Your rating: 5125</p>
                            <div className="btnRatingList-addrmv">
                                <button className="RatingListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj carda */}

                    {/* pocetak carda */}
                    <div className="RatingList-card">
                        <div className="allmoviesRatingList-cardtop">
                            <NavLink to="">
                                <img src={film} alt="" className="RatingList-img" />
                            </NavLink>
                        </div>
                        <div className="RatingListcard-bottom">
                            <p className="RatingList-name">Mission imposible</p>
                            <p className="RatingList-rating">Your rating: 5125</p>
                            <div className="btnRatingList-addrmv">
                                <button className="RatingListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* kraj carda */}
                </div>
            </div>

        </div>
    )
}

export default RatingList
