import React from "react";
import { useNavigate } from "react";
import "./Bed.css";
import "../assets/netclipart.com-bed-clipart-357940.png";

const Bed = () => {
    // let navigate = useNavigate()
    // const handleLogout = () => {
    //     navigate('/')
    // }
  return (
    <>
      <div className='bed'>
        <img
          className='bedSvg'
          alt='bed'
          src={require("../assets/netclipart.com-bed-clipart-357940.png")}
        //   onClick={()=> handleLogout}
        >
        </img>
      </div>
    </>
  );
};

export default Bed;
