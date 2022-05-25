import React from "react";
import "./Login.css";
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "66e5aac214ce426da06b6acdb57896be";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/home";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);


//  	https://api.spotify.com/v1/me/playlists

const Login = () => {
 

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };
    

  return (
    <>
      <body className='login-page'>
        <img className='title-page-logo' alt='logo' src={require('../assets/hylla logo.png')}></img>
        <h1 className='titles'>Please login with a valid Spotify account for a complete user experience</h1>
        <button className="user-login-button" onClick={handleLogin}>login to spotify</button>
      </body>
    </>
  );
};

export default Login;
