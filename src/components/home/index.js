import React, { useEffect } from "react";
import { Consume } from "../../context/Consumer";
import { MovieListDataContext } from "../../context";
import Hero from "./Hero";
import Card from "../Card/Card";
import "./home.scss";
import config from "../../common/config";

const Index = (props) => {
  const { results } = props.MovieListData.discoverMovieList;
  return (
    <div className='home'>
      <div className='main__container'>
        <Hero />
        <div className='card__list'>
          <div className='card__container'>
            {results.map((result) => {
              return <Card {...result} key={result.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consume(Index, [MovieListDataContext]);
