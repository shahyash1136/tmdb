import React, { useState } from "react";

import { MovieListDataContext, TrendingDataContext } from ".";
import { getData } from "../common";
import config from "../common/config";

export const MovieListDataProvider = (props) => {
  const [discoverMovieList, setDiscoverMovieList] = useState(null);
  const [discoverMovieIsLoading, setDiscoverMovieIsLoading] = useState(false);

  const getDiscoverMovies = (parmasobj, cb) => {
    setDiscoverMovieIsLoading(true);
    let apiParams = {
      endPoint: config.API_URL.discover.replace(
        "{{media_type}}",
        config.Media_Type.movie
      ),
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

export const TrendingDataProvider = (props) => {
  const [trendingData, setTrendingData] = useState(null);
  const getTrendingData = (timeWindow, parmasobj, cb) => {
    let apiParams = {
      endPoint: config.API_URL.trending
        .replace("{{media_type}}", config.Media_Type.all)
        .replace("{{time_window}}", timeWindow),
      type: "GET",
      name: config.API_Name.trending,
      params: parmasobj,
    };
    getData(apiParams, (res) => {
      setTrendingData(res);
      if (cb) {
        cb(res);
      }
    });
  };

  return (
    <TrendingDataContext.Provider value={{ getTrendingData, trendingData }}>
      {props.children}
    </TrendingDataContext.Provider>
  );
};
