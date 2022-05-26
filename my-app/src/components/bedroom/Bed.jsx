import React from "react";
import {useNavigate} from "react";
import "./Bed.css";
import "../assets/netclipart.com-bed-clipart-357940.png";

const Bed = () => {
    // const handleLogout = () => {
    //     // useNavigate("/")
    // }
  return (
    <>
      <div className='bed'>
        <img
          className='bedSvg'
          alt='bed'
          src={require("../assets/netclipart.com-bed-clipart-357940.png")}
        >
          {/* <button className='user-login-button' onClick={handleLogout}>
            Logout
          </button> */}
        </img>
      </div>
    </>
  );
};

export default Bed;
