import React, { useState } from "react";

import {
  MovieListDataContext,
  MovieShowDataContext,
  TVListDataContext,
  TVShowDataContext,
  WebConfigDataContext,
} from ".";
import { getData } from "../common";
import config from "../common/config";

export const WebConfigDataProvider = (props) => {
  const [movieList, setMovieList] = useState({ test: "test1" });
  return (
    <WebConfigDataContext.Provider value={{ data: movieList }}>
      {props.children}
    </WebConfigDataContext.Provider>
  );
};

export const MovieListDataProvider = (props) => {
  const [discoverMovieList, setDiscoverMovieList] = useState(null);
  const [discoverMovieIsLoading, setDiscoverMovieIsLoading] = useState(false);

  const getDiscoverMovies = (parmasobj, cb) => {
    setDiscoverMovieIsLoading(true);
    let apiParams = {
      endPoint: config.API_URL.discoverMoveies,
      type: "GET",
      name: config.API_Name.discover,
      params: parmasobj,
    };
    getData(apiParams, (res) => {
      setDiscoverMovieList(res);
      setDiscoverMovieIsLoading(false);
      if (cb) {
        cb(res);
      }
    });
  };

  return (
    <MovieListDataContext.Provider
      value={{
        getDiscoverMovies,
        discoverMovieList,
        setDiscoverMovieIsLoading,
        discoverMovieIsLoading,
      }}>
      {props.children}
    </MovieListDataContext.Provider>
  );
};

export const TVListDataProvider = (props) => {
  const [movieList, setMovieList] = useState({ test: "test1" });
  return (
    <TVListDataContext.Provider value={{ data: movieList }}>
      {props.children}
    </TVListDataContext.Provider>
  );
};

export const MovieShowDataProvider = (props) => {
  const [movieList, setMovieList] = useState({ test: "test1" });
  return (
    <MovieShowDataContext.Provider value={{ data: movieList }}>
      {props.children}
    </MovieShowDataContext.Provider>
  );
};

export const TVShowDataProvider = (props) => {
  const [movieList, setMovieList] = useState({ test: "test1" });
  return (
    <TVShowDataContext.Provider value={{ data: movieList }}>
      {props.children}
    </TVShowDataContext.Provider>
  );
};
