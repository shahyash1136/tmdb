import React, { useState } from "react";

import {
  MovieListDataContext,
  TrendingDataContext,
  PersonDataContext,
} from ".";
import { getData } from "../common";
import config from "../common/config";

export const MovieListDataProvider = (props) => {
  const [discoverMovieList, setDiscoverMovieList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getDiscoverMovies = (parmasobj, cb) => {
    setIsLoading(true);
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
      setIsLoading(false);
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
        setIsLoading,
        isLoading,
      }}>
      {props.children}
    </MovieListDataContext.Provider>
  );
};

export const TrendingDataProvider = (props) => {
  const [trendingData, setTrendingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getTrendingData = (timeWindow, parmasobj, cb) => {
    setIsLoading(true);
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
      setIsLoading(false);
      if (cb) {
        cb(res);
      }
    });
  };

  return (
    <TrendingDataContext.Provider
      value={{ getTrendingData, trendingData, isLoading }}>
      {props.children}
    </TrendingDataContext.Provider>
  );
};

export const PersonDataProvider = (props) => {
  const [peopleList, setPeopleList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getPeopleList = (parmasobj, cb) => {
    setIsLoading(true);
    let apiParams = {
      endPoint: config.API_URL.popularPerson,
      type: "GET",
      params: parmasobj,
    };
    getData(apiParams, (res) => {
      setPeopleList(res);
      setIsLoading(false);
      if (cb) {
        cb(res);
      }
    });
  };
  return (
    <PersonDataContext.Provider
      value={{ peopleList, getPeopleList, isLoading }}>
      {props.children}
    </PersonDataContext.Provider>
  );
};
