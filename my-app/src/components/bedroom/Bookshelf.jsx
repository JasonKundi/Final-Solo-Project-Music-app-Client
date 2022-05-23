import React from "react";
import "./Bookshelf.css";

const Bookshelf = () => {
  return (
    <>
      <div className='bookshelf'>
        <div className='shelf'>
          <div className='column'>
            <div className='rand'>
              <div className='inside'></div>
            </div>
          </div>
          <div className='column'>
            <div className='rand'>
              <div className='rand-border'></div>
              <div className='inside'></div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='rand'>
            <div className='inside'></div>
          </div>
        </div>
        <div className='column'>
          <div className='rand'>
            <div className='inside'></div>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='rand'>
          <div className='inside'></div>
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
