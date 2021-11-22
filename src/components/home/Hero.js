import React, { useState } from "react";
import config from "../../common/config";

const Hero = () => {
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <div className='hero'>
      <div
        className='hero__container'
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg')`,
        }}>
        <div className='heading'>
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className='search'>
          <form onSubmit={submitHandler} acceptCharset='utf-8'>
            <label>
              <input
                dir='auto'
                id='inner_search_v4'
                name='query'
                type='text'
                tabIndex='1'
                autoCorrect='off'
                autofill='off'
                autoComplete='off'
                spellCheck='false'
                placeholder='Search for a movie, tv show, person......'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button className='btn' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
