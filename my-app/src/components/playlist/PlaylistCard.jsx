import React from "react";
import "./PlaylistCard.css"



const PlaylistCard = ({playlists}) => {
    // const [playlists, setPlaylists] = useState("");
    return <ul className='container'> {playlists.map((playlist) => {
        return (
            <>
            <li>
                <div key={playlists.id} className='playlist-Card'>
                    <img className='playlist-image' alt='playlist' src={playlist.images[0].url}></img>
                    <h3 className='playlist-title'>{playlist.name}</h3>
                </div>
            </li>
            </>
        )
    })}
    </ul>
}

export default PlaylistCard