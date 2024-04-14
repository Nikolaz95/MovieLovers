import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import css
import "../pages/TrendingMovie.css";
import { NavLink } from 'react-router-dom';

/* icon */
import { MdFavoriteBorder } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

const TrendigMovie = () => {

    const breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };


    const [activeTab, setActiveTab] = useState('day');
    const [trendingData, setTrendingData] = useState([]);
    const [switchTransform, setSwitchTransform] = useState(0);


    const handleTabClick = (tab) => {
        if (activeTab !== tab) {
            const newTransform = tab === 'day' ? 0 : 100; // Adjust as needed based on your layout
            setSwitchTransform(newTransform);
            setActiveTab(tab);
        }
    };


    useEffect(() => {
        // Fetch trending data based on the active tab (day, week, etc.)
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/${activeTab}?api_key=d0e15d3cd703e39934833d9dc348e907`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTrendingData(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return (
        <div>
            <div className="trending-content ">
                <h1>Movie Trending:</h1>
                <div className="tabs-options">
                    <p
                        className={`tab ${activeTab === 'day' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('day')}
                    >
                        Day
                    </p>
                    <p
                        className={`tab ${activeTab === 'week' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('week')}
                    >
                        Week
                    </p>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: true }}  // Adjust the delay as needed
                breakpoints={breakpoints}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

            >

                {trendingData.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="conteiner-card">
                            <div className="topcard">
                                <NavLink to={`/movies/${movie.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" className='poster' />
                                </NavLink>
                            </div>
                            <div className="botom-card">
                                <h3 className="card-title">{movie.title}</h3>
                                <p className="card-rating">Rating: {movie.vote_average}</p>
                                <div className="btn-card">
                                    <button className="add-to-watchlist">Add to Watchlist <FiPlusCircle className='icon-add' /></button>
                                    <button className="add-to-favorites">Add to Favorites <MdFavoriteBorder className='icon-favorit' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default TrendigMovie
