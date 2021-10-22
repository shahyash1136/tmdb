import React from "react";
import config from "../../common/config";
import Hero from "./Hero";
import "./home.scss";

const index = () => {
  return (
    <div className='home'>
      <div className='main__container'>
        <Hero />
      </div>
    </div>
  );
};

export default index;
