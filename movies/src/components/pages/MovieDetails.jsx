import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import MetaData from '../other/MetaData';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import slike
import Avatar from "../../assets/images/avatar-profile.jpg"
import Mising from "../../assets/images/mising-pic.jpg"
import Poster from "../../assets/images/im-poster.jpg"
import AddWatchList from "../../assets/icons/icon-add.png"
import Remove from "../../assets/icons/icons-remove.png"
import AddFavoritList from "../../assets/icons/icon-like2.png"

/* icon */
import { MdFavoriteBorder } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

//import css
import "../pages/MovieDetails.css";
import "../pages/ActorSlider.css";


const MovieDetails = () => {

    const TrailsOfMovie = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        330: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        350: { slidesPerView: 1, spaceBetween: 10, },
        370: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 1, spaceBetween: 10, },
        960: { slidesPerView: 1, spaceBetween: 10, },
        1260: { slidesPerView: 2, spaceBetween: 10, },
        1600: { slidesPerView: 2, spaceBetween: 10, },
    };
    const PicturesOfMovie = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        330: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        350: { slidesPerView: 1, spaceBetween: 10, },
        370: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 3, spaceBetween: 10, },
        1600: { slidesPerView: 3, spaceBetween: 10, },
    };
    const ActorSlider = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        330: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        350: { slidesPerView: 1, spaceBetween: 10, },
        370: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };

    const params = useParams();
    const [data, setData] = useState(null);
    /* fetch  recommendations*/
    const [similar, setSimilar] = useState([]);
    /* fetch  credits actors */
    const [credits, setCredits] = useState(null);
    /* fetch  images in movie */
    const [picturesOfMovie, setPicturesOfMovie] = useState([]);
    /* fetch  video from movie */
    const [videosOfMovie, setVideosOfMovie] = useState([]);

    /* rating */
    const [ratingValue, setRatigValue] = React.useState(1.5);


    const [visibleReviews, setVisibleReviews] = useState(1);

    const showMoreReviews = () => {
        setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 3);
    };


    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json()
            setData(json);
            console.log(json)
        }

        async function fetchPicturesOfMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/images?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setPicturesOfMovie(json);
        }

        async function fetchVideosOfMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setVideosOfMovie(json);
        }

        async function fetchMovieActors() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setCredits(json);
        }

        async function fetchMovieRecommendations() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=d0e15d3cd703e39934833d9dc348e907`);

            const json = await response.json();
            setSimilar(json.results);
        }
        fetchMovieDetails();
        fetchPicturesOfMovie();
        fetchVideosOfMovie();
        fetchMovieActors();
        fetchMovieRecommendations();
    }, [params.id])



    return (
        <>
            <MetaData title={data?.original_title} />
            <div className="movieDetails-content">
                {/* movie infor */}
                <div className="movieDetails-topPart">
                    <img
                        src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/original/${data.backdrop_path}` : 'Missing'}
                        alt=""
                        className='Poster-movie'
                    />
                    {/* <img src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.poster_path}` : Mising} alt="" className='Poster-movie' /> */}
                </div>

                <div className="movieDetails-MovieInfo">
                    <div className="movieDetails-left">
                        <img src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${data.poster_path}` : Mising} alt="" className='poster-box' />
                    </div>

                    <div className="movieDetails-right">
                        <div className="movieDetails-rightTop">
                            <div className="movieDetails-title">
                                <h1>{data?.original_title}</h1>
                            </div>
                            <div className="tagline">
                                <p>"{data?.tagline}"</p>
                            </div>
                            <h3>Overview:</h3>
                            <div className="overview">
                                <p>{data?.overview}</p>
                            </div>
                            <div className="movieDetails-genres">

                                {
                                    data?.genres.map((genre) => (
                                        <span className='genres' key={genre.id}>
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <div className="facts">
                                <div className="facts-top">
                                    <span className='status'>Status: {data?.status}</span>
                                    <span className='release'>Release: {data?.release_date}</span>
                                </div>
                                <div className="facts-midle">
                                    <span className='runtime'>Runtime:  {data?.runtime} min</span>
                                    <span className='rating'>Rating: {data?.vote_average}</span>
                                </div>
                            </div>
                        </div>

                        <div className="movieDetails-rightMidle">
                        </div>
                        <div className="movieDetails-rightBotom">
                            {/* <span className='your-rating'>Your Rating: </span>
                            <span className='your-ratingStars'>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={ratingValue} precision={0.5} />
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </Stack>
                            </span> */}
                            <div className="movieDetails-buttons">
                                <button className='favorite-btn'>Add to Favorite<img src={AddFavoritList} alt="" className='icon-favorite' /></button>
                                <button className='watchlist-btn'>Add to Watch list<img src={AddWatchList} alt="" className='icon-watchlist' /> </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* movie infor */}

                {/* slike u filmu */}
                <section className='section-pitcutreOfMovie'>
                    <h1 className='title-pitcutreOfMovie'>Pictures from Movies:</h1>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={PicturesOfMovie}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <div className="content-pitcutreOfMovie">
                            {picturesOfMovie?.backdrops?.map(pictures => (
                                <SwiperSlide key={pictures.id} /* className="pictures-card" */>
                                    <img src={`https://image.tmdb.org/t/p/w500${pictures.file_path}`} alt="" className="pitcutreOfMovieImg" />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </section>
                {/* slike u filmu */}

                {/* video iz filma */}
                <section className='section-videosOfMovie'>
                    <h1 className='title-videosOfMovie'>Videos from Movies:</h1>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={TrailsOfMovie}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        <div className="content-videosOfMovie">
                            {videosOfMovie?.results?.map(trail => (
                                <SwiperSlide key={trail.key} className="video-card">
                                    <iframe
                                        title={trail.name}
                                        width="100%"
                                        height="500"
                                        border="none"
                                        src={`https://www.youtube.com/embed/${trail.key}`}
                                        allowFullScreen
                                        className='videosOfMovieMp4'
                                    ></iframe>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </section>
                {/* video iz filma */}

                {/* movie REVIEWS */}
                <section className='section-Reviews'>
                    <h1 className='title-Reviews'>Reviews (18)</h1>
                    <div className="content-Reviews">
                        {/* pocetak kart reviwes */}
                        <div className="main-Review">
                            <div className="inner-Review">
                                <div className="innerLeft-Review">
                                    <img src={Avatar} alt="" className="icon-Review" />
                                </div>
                                <div className="innerRight-Review">
                                    <div className="innerRight-ReviewTop">
                                        <div className="innerRight-ReviewButon">
                                            <p>Joe</p>
                                            <p>08-02-2024 21:01:56</p>
                                        </div>
                                        <div className="innerRight-ReviewButon">
                                            <button className='ReviewButon'> <img src={Remove} className='ReviewButon-icon' alt="" />Remove</button>
                                        </div>
                                    </div>
                                    <div className="innerRight-ReviewBoton">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, ducimus ab consequatur omnis optio voluptatibus nobis fuga in officia. Facere ad est obcaecati animi! Maiores recusandae a, eaque nostrum ab similique porro! Iste ullam quae consequuntur expedita impedit veniam repellendus libero doloribus fugit. Repudiandae amet ad cupiditate eos deserunt! Fugit?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* KRAj kart reviwes */}
                    </div>

                </section>
                {/* movie REVIEWS */}

                {/* glumci u filmu */}
                <section className='actors'>
                    <h1 className='title-actors'>Actors:</h1>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={ActorSlider}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >

                        <div className="actors-content">
                            {credits?.cast?.map(actor => (
                                <SwiperSlide key={actor.id} className="actors-card">
                                    <NavLink to={`/actors/${actor.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt="Person" className="actors-img" />
                                    </NavLink>
                                    <div className="actors-botton-container">
                                        <p className="actors-name">{actor.name}</p>
                                        <p className="actors-name">As</p>
                                        <p className="actors-character">{actor.character}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </section>
                {/* glumci u filmu */}

                {/* recomendation u filmu */}
                <section className="recommendations">
                    <h1 className="title-recommendations">Recommendations:</h1>


                    <div className="recommendations-content">
                        {similar && similar.length > 0 && (

                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={10}
                                slidesPerView={5}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                breakpoints={ActorSlider}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}

                            >

                                {similar.map((similars) => (
                                    <SwiperSlide key={similars.id}>
                                        <div className="conteiner-card">
                                            <div className="topcard">
                                                <NavLink to={`/movies/${similars.id}`}>
                                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${similars.poster_path}`} alt="" className='poster' />
                                                </NavLink>
                                            </div>
                                            <div className="botom-card">
                                                <h3 className="card-title">{similars.title}</h3>
                                                <p className="card-rating">Rating: {similars.vote_average}</p>
                                                <div className="btn-card">
                                                    <button className="add-to-watchlist">Add to Watchlist <FiPlusCircle className='icon-add' /> </button>
                                                    <button className="add-to-favorites">Add to Favorites <MdFavoriteBorder className='icon-favorit' /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                                }
                            </Swiper>
                        )}

                    </div>
                </section>
                {/* recomendation u filmu */}
            </div>
        </>
    )
}

export default MovieDetails
