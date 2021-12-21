import React, { useEffect } from "react";
import { Consume } from "../context/Consumer";
import { MovieListDataContext } from "../context";
import { Route, Switch } from "react-router-dom";
import config from "../common/config";
import Header from "../components/menu/Header";
import Home from "../components/home";
import Movies from "../components/movies";

function Index(props) {
  useEffect(() => {
    !props.MovieListData.discoverMovieIsLoading &&
      !props.MovieListData.discoverMovieList &&
      props.MovieListData.getDiscoverMovies(
        {
          api_key: config.API_KEY,
          page: /* Math.floor(Math.random() * 500) + */ 1,
        },
        () => {}
      );
  }, []);

  const goAhead = () => {
    if (props.MovieListData && props.MovieListData.discoverMovieList) {
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

export default Consume(Index, [MovieListDataContext]);
