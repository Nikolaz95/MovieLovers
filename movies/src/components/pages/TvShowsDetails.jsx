import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import MetaData from '../other/MetaData';



// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import css
import "../pages/TvShowsDetails.css";
import "../pages/ActorSlider.css";

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

const TvShowsDetails = () => {
    //sliders code slike
    const PicturesOfTvShow = {
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
    //sliders code trail
    const TrailsOfTvShow = {
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
    //sliders code actors tvShow
    const ActorSliderTvShow = {
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

    //sliders code actors tvShow
    const recommendationTvShowSliders = {
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
    //fetch of tv show details
    const [data, setData] = useState(null);
    /* fetch  images in movie */
    const [picturesOfTvShow, setPicturesOfTvShow] = useState([]);
    /* fetch  video from movie */
    const [videosOfTvShow, setVideosOfTvShow] = useState([]);
    /* fetch  credits actors */
    const [credits, setCredits] = useState(null);
    /* fetch  recommendations*/
    const [similar, setSimilar] = useState([]);

    useEffect(() => {
        async function fetchtvShowDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json()
            setData(json);
            console.log(json)
        }

        async function fetchPicturesOfTvShows() {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/images?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setPicturesOfTvShow(json);
        }

        async function fetchVideosOfTvShow() {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setVideosOfTvShow(json);
        }

        async function fetchTvShowActors() {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setCredits(json);
        }

        async function fetchTvShowRecommendations() {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/recommendations?api_key=d0e15d3cd703e39934833d9dc348e907`);

            const json = await response.json();
            setSimilar(json.results);
        }

        fetchtvShowDetails();
        fetchPicturesOfTvShows();
        fetchVideosOfTvShow();
        fetchTvShowActors();
        fetchTvShowRecommendations();

    }, [params.id])

    return (
        <>
            <MetaData title={data?.name} />
            <div className="TvShowsDetails-content">
                {/* movie infor */}
                <div className="TvShowsDetails-topPart">
                    <img
                        src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/original/${data.backdrop_path}` : 'Missing'}
                        alt=""
                        className='Poster-TvShowsDetails'
                    />
                    {/* <img src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.poster_path}` : Mising} alt="" className='Poster-movie' /> */}
                </div>


                <div className="TvShowsDetails-TvShowInfo">
                    <div className="TvShowsDetails-left">
                        <img src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${data.poster_path}` : Mising} alt="" className='poster-box' />
                    </div>

                    {/* tv show infor */}
                    <div className="TvShowsDetails-right">
                        <div className="TvShowsDetails-rightTop">
                            <div className="TvShowsDetails-title">
                                <h1>{data?.name}</h1>
                            </div>
                            <div className="TvShowsDetails-tagline">
                                <p>"{data?.tagline}"</p>
                            </div>
                            <h3>Overview:</h3>
                            <div className="TvShowsDetails-overview">
                                <p>{data?.overview}</p>
                            </div>
                            <div className="TvShowsDetails-genres">

                                {data?.genres.map((genre) => (
                                    <span className='genres' key={genre.id}>
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                            <div className="TvShowsDetails-choseSeasonDetails">
                                <select >
                                    <option value="seasons">Seasons</option>
                                    {data?.seasons.map((season) => (
                                        <option value="season" key={season.id}>
                                            <p>Season</p> {season.season_number}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="TvShowsDetails-facts">
                                <div className="TvShowsDetails-factsTop">
                                    <span className='TvShowsDetails-firsAirDate'>First Air Date: {data?.first_air_date}</span>
                                    <span className='TvShowsDetails-lastAirDate'>Last Air Date: {data?.last_air_date}</span>
                                    <span className='TvShowsDetails-status'>Status: {data?.status}</span>
                                </div>

                                <div className="TvShowsDetails-factsMidle">
                                    <span className='TvShowsDetails-rating'>Rating: {data?.vote_average}</span>
                                </div>
                                <div className="TvShowsDetails-factBotton">
                                    <span className='TvShowsDetails-numOfSeasons'>Number of Seasons:  {data?.number_of_seasons}</span>
                                    <span className='TvShowsDetails-numOfEpisodes'>Number of Episodes: {data?.number_of_episodes}</span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                {/* tv show infor */}

                {/* slike u serijama */}
                <section className='section-pitcutreOfTvShow'>
                    <h1 className='title-pitcutreOfTvShow'>Pictures from Tv Show:</h1>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={PicturesOfTvShow}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <div className="content-pitcutreOfTvShow">
                            {picturesOfTvShow?.backdrops?.map(pictures => (
                                <SwiperSlide key={pictures.id} /* className="pictures-card" */>
                                    <img src={`https://image.tmdb.org/t/p/w500${pictures.file_path}`} alt="" className="pitcutreOfTvShowImg" />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </section>
                {/* slike u serijama */}

                {/* video iz serija */}
                <section className='section-videosOfTvShow'>
                    <h1 className='title-videosOfTvShow'>Videos from Movies:</h1>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={TrailsOfTvShow}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        <div className="content-videosOfTvShow">
                            {videosOfTvShow?.results?.map(trail => (
                                <SwiperSlide key={trail.key} className="video-cardTvShow">
                                    <iframe
                                        title={trail.name}
                                        width="100%"
                                        height="500"
                                        border="none"
                                        src={`https://www.youtube.com/embed/${trail.key}`}
                                        allowFullScreen
                                        className='videosOfTvShowMp4'
                                    ></iframe>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </section>
                {/* video iz serija */}

                {/* tvShow REVIEWS */}
                <section className='section-ReviewsTvShow'>
                    <h1 className='title-ReviewsTvShow'>Reviews (18)</h1>
                    <div className="content-ReviewsTvShow">
                        {/* pocetak kart reviwes */}
                        <div className="main-ReviewTvShow">
                            <div className="inner-ReviewTvShow">
                                <div className="innerLeft-ReviewTvShow">
                                    <img src={Avatar} alt="" className="icon-ReviewTvShow" />
                                </div>
                                <div className="innerRight-ReviewTvShow">
                                    <div className="innerRight-ReviewTopTvShow">
                                        <div className="innerRight-ReviewButonTvShow">
                                            <p>Joe</p>
                                            <p>08-02-2024 21:01:56</p>
                                        </div>
                                        <div className="innerRight-ReviewButon">
                                            <button className='ReviewButonTvShow'> <img src={Remove} className='ReviewButon-iconTvShow' alt="" />Remove</button>
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
                {/* tvShow REVIEWS */}

                {/* glumci u seiji */}
                <section className='actors-TvShow'>
                    <h1 className='title-actorsTvShow'>Actors:</h1>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={ActorSliderTvShow}
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
                {/* glumci u seiji */}

                {/* similar za serije*/}
                <section className="recommendationsTvShow">
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
                                breakpoints={recommendationTvShowSliders}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}

                            >

                                {similar.map((similars) => (
                                    <SwiperSlide key={similars.id}>
                                        <div className="conteiner-card">
                                            <div className="topcard">
                                                <NavLink to={`/tvshows/${similars.id}`}>
                                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${similars.poster_path}`} alt="" className='poster' />
                                                </NavLink>
                                            </div>
                                            <div className="botom-card">
                                                <h3 className="card-title">{similars.name}</h3>
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
                {/* similar za serije*/}
            </div>
        </>
    )
}

export default TvShowsDetails