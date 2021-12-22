import React from "react";
import { Consume } from "../../context/Consumer";
import { MovieListDataContext } from "../../context";
import Hero from "./Hero";
import Card from "../Card/Card";
import "./home.scss";
import Trending from "./Trending";
import SimpleBar from "simplebar-react";

const Index = (props) => {
  const { results } = props.MovieListData.discoverMovieList;
  return (
    <div className='home'>
      <div className='main__container'>
        <Hero />
        <Trending />
        <div className='card__list'>
          <SimpleBar forceVisible='x' autoHide={false}>
            <div className='card__container'>
              {results.map((result) => {
                return <Card {...result} key={result.id} />;
              })}
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default Consume(Index, [MovieListDataContext]);
