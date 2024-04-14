

import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import MetaData from '../other/MetaData';


/* import css */
import '../layout/Movies.css';





/* icon */
import { AiOutlineArrowUp } from 'react-icons/ai';
import AddWatchList from "../../assets/icons/icon-add.png"
import AddFavoritList from "../../assets/icons/icon-like2.png"


const Movies = () => {

    const getTitleBasedOnCategory = (category) => {
        switch (category) {
            case 'theaters':
                return 'Now playing in Theatres';
            case 'upcoming':
                return 'Upcoming movies';
            case 'toprated':
                return 'Top Rated Movies';
            default:
                return '';
        }
    };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);



    const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || 'theaters');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        setShowDropdown(false);
    };

    /* funckija za dropdown */
    const [showDropdown, setShowDropdown] = useState(false);


    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getDataRequest = async () => {
            try {
                let link = '';

                if (selectedCategory === 'theaters') {
                    link = `https://api.themoviedb.org/3/movie/now_playing?api_key=d0e15d3cd703e39934833d9dc348e907`;
                } else if (selectedCategory === 'upcoming') {
                    link = `https://api.themoviedb.org/3/movie/upcoming?api_key=d0e15d3cd703e39934833d9dc348e907`;
                } else if (selectedCategory === 'toprated') {
                    link = `https://api.themoviedb.org/3/movie/top_rated?api_key=d0e15d3cd703e39934833d9dc348e907`;
                }

                const response = await fetch(link);
                const jsonData = await response.json();

                setMovies(jsonData.results || []);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., show a user-friendly message
            }
        };

        getDataRequest();
    }, [selectedCategory]);


    return (

        <>
            <MetaData title={getTitleBasedOnCategory(selectedCategory)} />
            <section className="all-moviecontent">

                <div className="category-title">
                    <h1>{selectedCategory === 'theaters' ? 'Now playing in Theatres' : selectedCategory === 'upcoming' ? 'Upcoming movies' : selectedCategory === "toprated" ? 'Top Rated Movies' : ""}</h1>


                    <div className="dropdown-content">
                        <section className="dropdown-menu">
                            <p onClick={() => setShowDropdown(!showDropdown)}>Movie Option <AiOutlineArrowUp className={showDropdown ? 'arrowDrp rotatedArrow' : 'arrowDrp'} />
                            </p>
                        </section>
                        {showDropdown && (
                            <div onClick={handleCategoryChange} className={`showDrop ${showDropdown ? 'active' : ''}`}>
                                <option value="theaters">Theatres movies</option>
                                <option value="upcoming">Upcoming movies</option>
                                <option value="toprated">Top Rated Movies</option>

                            </div >
                        )}
                    </div>
                </div>


                <div className="allmovies-content">
                    {movies.map((movie) => (
                        <div key={movie.id} className={`allmovies-card ${selectedCategory}`}>
                            <div className="allmovies-cardtop">
                                <NavLink to={`/movies/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="allmoviescards-img" />
                                </NavLink>
                            </div>
                            <div className="card-bottom">
                                <p className="movieall-name">{movie.title}</p>
                                <p className="movieall-rating">Rating: {movie.vote_average}</p>
                                <div className="movieDetails-buttons">
                                    <button className='favorite-btn'>Add to Favorite<img src={AddFavoritList} alt="" className='icon-favorite' /></button>
                                    <button className='watchlist-btn'>Add to Watch list<img src={AddWatchList} alt="" className='icon-watchlist' /> </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Movies
