import { lazy } from "react";

export const Home = lazy(() => {
  import("../components/home");
});

export const Movies = lazy(() => {
  import("../components/movies");
});
