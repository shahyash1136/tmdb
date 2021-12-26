import React from "react";
import "./App.scss";
import {
  MovieListDataProvider,
  PersonDataProvider,
  TrendingDataProvider,
} from "./context/Providers";
import Layout from "./Layout";
import "simplebar/dist/simplebar.min.css";

function App() {
  return (
    <MovieListDataProvider>
      <TrendingDataProvider>
        <PersonDataProvider>
          <Layout />
        </PersonDataProvider>
      </TrendingDataProvider>
    </MovieListDataProvider>
  );
}

export default App;
