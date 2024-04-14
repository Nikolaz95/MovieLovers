import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




//import img
import slika from "../../assets/images/jh.jpg"
//import css
import "../pages/TrendingTvShow.css";

/* icon */
import { MdFavoriteBorder } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

const PopularTvShows = () => {

    const breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };


    const [popularTvShow, setPopularTvShow] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual API key
                const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
                const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setPopularTvShow(jsonData.results); // Assuming the movie results are in the 'results' property

            } catch (error) {
                setError(error.message);
                console.error("Error Fetching data ", error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts

    }, []); // The empty dependency array ensures that useEffect


    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={breakpoints}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

            >


                {popularTvShow.map((tvpopular) => (
                    <SwiperSlide key={tvpopular.id}>

                        <div className="conteiner-TvShow">
                            <div className="topcard-TvShow">
                                <NavLink to={`tvshows/${tvpopular.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${tvpopular.poster_path}`} alt="" className='poster-TvShow' />
                                </NavLink>
                            </div>
                            <div className="botomCard-TvShow">
                                <h3 className="cardTitle-TvShow">{tvpopular.name}</h3>
                                <p className="cardRating-TvShow">Rating: {tvpopular.vote_average}</p>
                                <div className="btnCard-TvShow">
                                    <button className="addToWatchlist-TvShow">Add to Watchlist <FiPlusCircle className='iconAdd--TvShow' /></button>
                                    <button className="addToFavorites-TvShow">Add to Favorites <MdFavoriteBorder className='iconFavorit-TvShow' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default PopularTvShows
