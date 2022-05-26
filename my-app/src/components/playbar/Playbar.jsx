import React from "react";
import "./Playbar.css"
import SpotifyPlayer from "react-spotify-web-playback";

const Playbar = ({token, currentPlaylist }) => {
    if(!token || !currentPlaylist) {
        return (<></>)
    }
  return (
    <>
    <footer className="footer">
    <SpotifyPlayer
        token={token}
        uris={[currentPlaylist]}
        autoPlay={true}
        styles={{
            activeColor: '#fff',
            bgColor: '#0E1216',
            color: '#2416e2',
            loaderColor: '#af2896',
            sliderColor: '#af2896',
            trackArtistColor: '#af2896',
            trackNameColor: '#fff',
          }}
      />
    </footer>
      
      ;
    </>
  );
};

export default Playbar;
