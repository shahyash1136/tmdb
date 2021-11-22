import React from "react";
import "./App.scss";
import {
  WebConfigDataProvider,
  MovieListDataProvider,
  TVListDataProvider,
  MovieShowDataProvider,
  TVShowDataProvider,
} from "./context/Providers";
import Layout from "./Layout";

function App() {
  return (
    <WebConfigDataProvider>
      <MovieListDataProvider>
        <TVListDataProvider>
          <MovieShowDataProvider>
            <TVShowDataProvider>
              <Layout />
            </TVShowDataProvider>
          </MovieShowDataProvider>
        </TVListDataProvider>
      </MovieListDataProvider>
    </WebConfigDataProvider>
  );
}

export default App;
