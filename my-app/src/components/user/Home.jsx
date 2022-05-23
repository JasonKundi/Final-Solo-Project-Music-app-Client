import React from "react";
import "./Home.css";
import Bookshelf from '../bedroom/Bookshelf.jsx'
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
  useEffect(() => {
    console.log("start of use effect");
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);

      const options = {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      };

      fetch("https://api.spotify.com/v1/me/playlists", options)
        .then((res) => res.json())
        .then((json) => console.log("fetch response", json));
    }
  });
  return (
      <body className='home-page'>
        <div className='home-grid'>
          <h1>Welcome to your inner music sanctuary!</h1>
          <h2>Let's Start building</h2>
          <Bookshelf/>
        </div>
      </body>
  );
};

export default Home;
