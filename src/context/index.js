import { createContext } from "react";

//context.displayName is mondatory to availe data in consumer with that name

export const WebConfigDataContext = createContext(null);
WebConfigDataContext.displayName = "WebConfigData";

export const MovieListDataContext = createContext(null);
MovieListDataContext.displayName = "MovieListData";

export const TVListDataContext = createContext(null);
TVListDataContext.displayName = "TVListData";

export const MovieShowDataContext = createContext(null);
MovieShowDataContext.displayName = "MovieShowData";

export const TVShowDataContext = createContext(null);
TVShowDataContext.displayName = "TVShowData";
