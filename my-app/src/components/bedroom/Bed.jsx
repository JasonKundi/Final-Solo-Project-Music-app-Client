import React from "react";
import "./Bed.css"
import "../assets/netclipart.com-bed-clipart-357940.png"


const Bed = () => {
    return (
        <>
        <div className='bed'>
            <img className='bedSvg' alt='bed' src={require('../assets/netclipart.com-bed-clipart-357940.png')}></img>
        </div>
        
        </>
    )
}

export default Bed