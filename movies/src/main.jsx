import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Root from './components/Root.jsx';
import Content from './components/layout/Content.jsx';
import ErorPage from './components/ErorPage.jsx';
import Movies from './components/layout/Movies.jsx';
import MovieDetails from './components/pages/MovieDetails.jsx';
import Search from './components/layout/Search.jsx';
import ActorPage from './components/pages/ActorPage.jsx';
import TvShows from './components/layout/TvShows.jsx';
import ProfileAccount from './components/user/ProfileAccount.jsx';
import WatchList from './components/user/WatchList.jsx';
import FavoritList from './components/user/FavoritList.jsx';
import SettingsProfile from './components/user/SettingsProfile.jsx';
import RatingList from './components/user/RatingList.jsx';
import ActorFavorit from './components/user/ActorFavorit.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';
import TvShowsDetails from './components/pages/TvShowsDetails.jsx';
import { Provider } from 'react-redux';
import { store } from './components/redux/store.js';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Content />
      },

      {
        path: "*",
        element: <ErorPage />
      },
      {
        path: "/movies",
        element: <Movies />
      },

      {
        path: "/movies/:id",
        element: <MovieDetails />
      },
      {
        path: "/search",
        element: <Search />
      },

      {
        path: "/tvshows",
        element: <TvShows />
      },
      {
        path: "/tvshows/:id",
        element: <TvShowsDetails />
      },
      {
        path: "/actors/:id",
        element: <ActorPage />
      },

      {
        path: "/login",
        element: <Login />
      },

      {
        path: "/registration",
        element: <Register />
      },

      {
        path: "/profile",
        element: <ProfileAccount />
      },

      {
        path: "/watchList",
        element: <WatchList />
      },

      {
        path: "/favoritList",
        element: <FavoritList />
      },

      {
        path: "/ratingList",
        element: <RatingList />
      },
      {
        path: "/favoritActor",
        element: <ActorFavorit />
      },

      {
        path: "/settings",
        element: <SettingsProfile />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </Provider>
  </React.StrictMode>,
)