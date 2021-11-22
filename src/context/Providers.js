import React, { useState } from "react";

import {
  MovieListDataContext,
  MovieShowDataContext,
  TVListDataContext,
  TVShowDataContext,
  WebConfigDataContext,
} from ".";
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
  const [movieList, setMovieList] = useState({ test: "test1" });
  return (
    <MovieListDataContext.Provider value={{ data: movieList }}>
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
