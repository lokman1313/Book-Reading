import React from 'react';
import book from "../../assets/hero_img.jpg"
const HomeBanner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={book}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='space-y-8'>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> Your bookshelf</h1>
      
      <button className="btn btn-success text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default HomeBanner;