import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
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
import "../pages/ActorPage.css";

//import img
import MissingPicture from "../../assets/images/mising-pic.jpg"
import MetaData from '../other/MetaData';

const ActorPage = () => {

    const breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };


    /* fetch data */

    const [personData, setPersonData] = useState(null);
    const [movieCredits, setMovieCredits] = useState([]);
    const { id } = useParams();


    const fetchPersonData = async (personId) => {

        const apiKey = 'd0e15d3cd703e39934833d9dc348e907'
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-US`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch person data');
            }

            const data = await response.json();
            setPersonData(data);
            // Fetch movie credits after fetching person data
            fetchMovieCredits(personId);
        } catch (error) {
            console.error('Error fetching person data:', error);
        }
    };


    /* fetch data movie credits */

    const fetchMovieCredits = async (personId) => {
        const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}&language=en-US`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch movie credits');
            }

            const data = await response.json();
            setMovieCredits(data.cast);
        } catch (error) {
            console.error('Error fetching movie credits:', error);
        }
    };

    useEffect(() => {
        // Replace '123' with the actual person_id you want to fetch
        fetchPersonData(id);
    }, [id]);


    return (
        <>
            <MetaData title={personData?.name} />
            <div>
                <section className="actorsPAge-content">

                    <aside className='Actors-left'>
                        {personData?.profile_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${personData.profile_path}`}
                                alt=""
                                className='Actors-img'
                            />
                        ) : (
                            <img src={MissingPicture} alt="Missing" className="Actors-img" />
                        )}
                        <div className="details-Actors">

                            <div className="details-addbutons">
                                {/* <AiOutlineHeart /> */}
                            </div>
                            <h1>Personal Info :</h1>

                            <h1>Know for:</h1>
                            <p>{personData?.known_for_department}</p>

                            <h1>Birthday:</h1>
                            <p>{personData?.birthday}</p>

                            <h1>Place of Birth:</h1>
                            <p>{personData?.place_of_birth}</p>
                        </div>
                    </aside>


                    <div className="Actors-biography">
                        <h1 className="Actors-name">{personData?.name}</h1>


                        <h1 className="Actors-bio">Biograph</h1>
                        <div className="biografi">
                            <p>{personData?.biography}</p>
                        </div>

                    </div>

                </section>

                <article className="Actors-rightBottom">

                    <h1 className="title-Actors"> {personData?.name}´s Movies:</h1>
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

                        {movieCredits.map((movie) => (
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
                </article>
            </div>
        </>
    )
}

export default ActorPage
