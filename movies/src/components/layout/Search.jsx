import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


//import css
import "../layout/Search.css";


import AddWatchList from "../../assets/icons/icon-add.png"
import AddFavoritList from "../../assets/icons/icon-like2.png"

/* icon */
import { AiOutlineHeart } from "react-icons/ai";
import MetaData from '../other/MetaData';

const Search = () => {


    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrl = 'https://api.themoviedb.org/3/search/movie';

    console.log('API URL:', apiUrl);
    console.log('API Key:', apiKey);


    useEffect(() => {
        // Function to make the API request
        console.log('API URL:', apiUrl);
        console.log('API Key:', apiKey);
        const searchMovies = async () => {
            try {
                const response = await fetch(`${apiUrl}?api_key=${apiKey}&query=${searchValue}`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data.results);

                } else {
                    console.error('Error fetching data from TMDB API:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data from TMDB API: ', error);
            }
        };

        // Call the searchMovies function whenever searchValue changes
        searchMovies();
    }, [searchValue]);


    return (

        <>
            <MetaData title={"Search"} />
            <section className="search-section">

                <h1 className='title-search'>Serch for the movies:</h1>

                <div className="input-search">
                    <div className="search-input">
                        <div className="search-conteiner">
                            <form action="search-bar">
                                <input
                                    className="searchInput"
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder='Search for the Movies...'
                                />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="content-Moviesearch">
                    {searchResults.map((result) => (

                        <div key={result.id} className="searchMovies-card">
                            <div className="searchallmovies-cardtop">
                                <NavLink to={`/movies/${result.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w300${result.poster_path}`} alt="" className="searchMovie-img" />
                                </NavLink>
                            </div>
                            <div className="searchMovie-bottom">
                                <p className="searchMovie-name">{result.title}</p>
                                <p className="searchmovie-rating">Rating: {result.vote_average}</p>
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

export default Search
