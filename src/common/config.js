const config = {};
config.ROOT_DOMAIN = process.env.REACT_APP_BASE_DOMAIN;
config.IMG_BASE = `/images/`;
config.BASE_DOMAIN = "/";
config.COOKIE_GM = "tmdb_RAW";
config.nameSpaceKey = "tmdb";
config.API_BASE_URL = "https://api.themoviedb.org/3/";
config.API_KEY = process.env.REACT_APP_API_KEY;
config.lang = "en-US";

config.Media_Type = {
  all: "all",
  movie: "movie",
  tv: "tv",
  person: "person",
};

config.Time_Window = {
  day: "day",
  week: "week",
};

config.API_Name = {
  discover: "discover",
  trending: "trending",
};

config.API_URL = {
  discover: `${config.API_BASE_URL}${config.API_Name.discover}/{{media_type}}`,
  trending: `${config.API_BASE_URL}${config.API_Name.trending}/{{media_type}}/{{time_window}}`,
};

config.Bar_Color = {
  green: "#21d07a",
  yellow: "#d2d531",
  red: "#db2360",
};

export default config;
