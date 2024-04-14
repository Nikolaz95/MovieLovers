import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



/* icon */
import { MdFavoriteBorder } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

//import css
import "../pages/MovieTheater.css";
import { NavLink } from 'react-router-dom';

const MovieUpcoming = () => {
    const breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };


    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual API key
                const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
                const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setMovies(jsonData.results); // Assuming the movie results are in the 'results' property

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

                {movies.map((movie) => (
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

export default MovieUpcoming
