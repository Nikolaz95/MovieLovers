import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


//import css
import "../layout/Content.css";
import MovieTheater from '../pages/MovieTheater';
import MovieUpcoming from '../pages/MovieUpcoming';
import MovieTopRated from '../pages/MovieTopRated';
import TrendigMovie from '../pages/TrendigMovie';
import TrendingTvShow from '../pages/TrendingTvShow';
import TopRatedTvShows from '../pages/TopRatedTvShows';
import PopularTvShows from '../pages/PopularTvShows';
import MetaData from '../other/MetaData';

const Content = () => {

    return (
        <>
            <MetaData title={"Home"} />
            <div className='content-body'>

                {/* component od Trending movies */}
                <TrendigMovie />


                <div className="smal-title">
                    <h1>Now playing in Theatres :</h1>
                    <NavLink to="/movies?category=theaters">
                        <span className='navlink'>View All :</span>
                    </NavLink>

                </div>
                <MovieTheater />


                <div className="smal-title">
                    <h1>Upcoming movies :</h1>
                    <NavLink to="/movies?category=upcoming">
                        <span className='navlink'>View All :</span>
                    </NavLink>
                </div>
                <MovieUpcoming />

                <div className="smal-title">
                    <h1>Top Rated Movies :</h1>
                    <NavLink to="/movies?category=toprated">
                        <span className='navlink'>View All :</span>
                    </NavLink>
                </div>
                <MovieTopRated />

                {/* component od Trending Tv Show */}
                <TrendingTvShow />
                {/* component od Trending Tv Show */}

                <div className="smal-title">
                    <h1>Top Rated TvShows :</h1>
                    <NavLink to="/tvshows?category=topratedTv">
                        <span className='navlink'>View All :</span>
                    </NavLink>
                </div>
                <TopRatedTvShows />


                <div className="smal-title">
                    <h1>Popular TvShows :</h1>
                    <NavLink to="/tvshows?category=popularTv">
                        <span className='navlink'>View All :</span>
                    </NavLink>
                </div>
                <PopularTvShows />
            </div>
        </>
    )
}

export default Content
