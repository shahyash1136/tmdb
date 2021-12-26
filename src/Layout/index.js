import React, { useEffect } from "react";
import { Consume } from "../context/Consumer";
import {
  MovieListDataContext,
  TrendingDataContext,
  PersonDataContext,
} from "../context";
import { Route, Switch } from "react-router-dom";
import config from "../common/config";
import Header from "../components/menu/Header";
import Home from "../components/home";
import Movies from "../components/movies";

function Index(props) {
  useEffect(() => {
    !props.MovieListData.isLoading &&
      !props.MovieListData.discoverMovieList &&
      props.MovieListData.getDiscoverMovies(
        {
          api_key: config.API_KEY,
          page: 1,
        },
        () => {}
      );
    !props.TrendingData.isLoading &&
      props.TrendingData.getTrendingData(
        config.Time_Window.day,
        { api_key: config.API_KEY },
        () => {}
      );
    !props.PersonData.isLoading &&
      !props.PersonData.peopleList &&
      props.PersonData.getPeopleList(
        {
          api_key: config.API_KEY,
          page: 1,
        },
        () => {}
      );
  }, []);

  const goAhead = () => {
    if (
      props.MovieListData &&
      props.MovieListData.discoverMovieList &&
      props.TrendingData &&
      props.TrendingData.trendingData &&
      props.PersonData &&
      props.PersonData.peopleList
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <React.Fragment>
      <Header />
      {goAhead() ? (
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movies'>
            <Movies />
          </Route>
        </Switch>
      ) : (
        console.log("loading...")
      )}
    </React.Fragment>
  );
}

export default Consume(Index, [
  MovieListDataContext,
  TrendingDataContext,
  PersonDataContext,
]);
