import React from "react";
import "./App.scss";
import {
  MovieListDataProvider,
  TrendingDataProvider,
} from "./context/Providers";
import Layout from "./Layout";
import "simplebar/dist/simplebar.min.css";

function App() {
  return (
    <MovieListDataProvider>
      <TrendingDataProvider>
        <Layout />
      </TrendingDataProvider>
    </MovieListDataProvider>
  );
}

export default App;
