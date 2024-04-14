import React, { useEffect, useState } from 'react'
import MetaData from '../other/MetaData';


/* import css */
import '../layout/TvShows.css';

/* icon */
import { AiOutlineArrowUp } from 'react-icons/ai';
import AddWatchList from "../../assets/icons/icon-add.png"
import AddFavoritList from "../../assets/icons/icon-like2.png"
import { NavLink, useLocation } from 'react-router-dom';

//import img
import missing from "../../assets/images/mising-pic.jpg"

const TvShows = () => {
    const getTitleBasedOnCategory = (category) => {
        switch (category) {
            case 'trendingTv':
                return 'Trending Tv Shows';
            case 'popularTv':
                return 'Popular Tv Shows';
            case 'topratedTv':
                return 'Top Rated Tv Shows';
            default:
                return '';
        }
    };
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);



    const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || 'popularTv');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        setShowDropdown(false);
    };

    /* funckija za dropdown */
    const [showDropdown, setShowDropdown] = useState(false);

    const [tvShow, setTvShow] = useState([]);

    useEffect(() => {
        const getDataRequest = async () => {
            try {
                let link = '';

                if (selectedCategory === 'popularTv') {
                    link = `https://api.themoviedb.org/3/tv/popular?api_key=d0e15d3cd703e39934833d9dc348e907`;

                } else if (selectedCategory === 'topratedTv') {
                    link = `https://api.themoviedb.org/3/tv/top_rated?api_key=d0e15d3cd703e39934833d9dc348e907`;
                }
                else if (selectedCategory === 'trendingTv') {
                    link = `https://api.themoviedb.org/3/trending/tv/week?api_key=d0e15d3cd703e39934833d9dc348e907`;
                }

                const response = await fetch(link);
                const jsonData = await response.json();

                setTvShow(jsonData.results || []);
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
            <section className="all-tvshowContent">

                <div className="category-tvshowTitle">
                    <h1>{selectedCategory === 'popularTv' ? 'Popular Tv Shows' : selectedCategory === 'topratedTv' ? 'Top Rated Tv Shows' : selectedCategory === 'trendingTv' ? 'Trending Tv Shows' : ""}</h1>


                    <div className="dropdown-tvshowContent">
                        <section className="dropdown-tvshowMenu">
                            <p onClick={() => setShowDropdown(!showDropdown)}>Tv Shows Option <AiOutlineArrowUp className={showDropdown ? 'arrowDrp rotatedArrow' : 'arrowDrp'} />
                            </p>
                        </section>
                        {showDropdown && (
                            <div onClick={handleCategoryChange} className={`showDrop ${showDropdown ? 'active' : ''}`} >
                                <option value="popularTv">Popular Tv Shows</option>
                                <option value="topratedTv">Top Rated Tv Shows</option>
                                <option value="trendingTv">Trending Tv Shows</option>
                            </div >
                        )}
                    </div>
                </div>


                <div className="tvshow-content">
                    {tvShow.map((tvShows) => (
                        <div key={tvShows.id} className={`tvshow-card ${selectedCategory}`}>
                            <div className="tvshow-cardtop">
                                <NavLink to={`/tvshows/${tvShows.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${tvShows.poster_path}`} alt="" className="tvshowCards-img" />
                                </NavLink>
                            </div>
                            <div className="tvshowCard-bottom">
                                <p className="tvshow-name">{tvShows.name}</p>
                                <p className="tvshow-rating">Rating: {tvShows.vote_average}</p>
                                <div className="tvshowDetails-buttons">
                                    <button className='tvshowFavorite-btn'>Add to Favorite<img src={AddFavoritList} alt="" className='icon-favorite' /></button>
                                    <button className='tvshowWatchlist-btn'>Add to Watch list<img src={AddWatchList} alt="" className='icon-watchlist' /> </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TvShows
