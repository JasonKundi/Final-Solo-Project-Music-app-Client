import React from "react";
import "./Home.css";
import Bed from "../bedroom/Bed.jsx";
import Bookshelf from "../bedroom/Bookshelf.jsx";
import PlaylistCard from "../playlist/PlaylistCard.jsx";
import Playbar from "../playbar/Playbar.jsx";
import { useState, useEffect } from "react";



const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [token, setToken]= useState(null)
  const [currentPlaylist, setCurrentPlaylist]= useState(null)
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
      setToken(access_token);

      const options = {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      };

      fetch("https://api.spotify.com/v1/me/playlists", options)
        .then((res) => res.json())
        .then((json) => {
          setPlaylists(json.items);
          console.log("fetch response", json.items);
        });
    }
  }, []);
  return (
    <body className='home-page'>
      <div className='home-grid'>
        <Bookshelf />
        <Bed />
        <PlaylistCard playlists = {playlists} setCurrentPlaylist ={setCurrentPlaylist} />
        <Playbar token = {token} currentPlaylist={currentPlaylist} />
      </div>
    </body>
  );
};

export default Home;
