import { createContext } from "react";

//context.displayName is mondatory to availe data in consumer with that name

export const MovieListDataContext = createContext(null);
MovieListDataContext.displayName = "MovieListData";

export const TrendingDataContext = createContext(null);
TrendingDataContext.displayName = "TrendingData";
