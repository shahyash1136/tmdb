const config = {};
config.ROOT_DOMAIN = process.env.REACT_APP_BASE_DOMAIN;
config.IMG_BASE = `/images/`;
config.BASE_DOMAIN = "/";
config.COOKIE_GM = "tmdb_RAW";
config.nameSpaceKey = "tmdb";
config.API_BASE_URL = "https://api.themoviedb.org/3/";
config.API_KEY = process.env.REACT_APP_API_KEY;
config.lang = "en-US";

config.API_Name = {
  discover: "discover",
};

config.API_URL = {
  discoverMoveies: `${config.API_BASE_URL}${config.API_Name.discover}/movie/`,
  discoverTVs: `${config.API_BASE_URL}${config.API_Name.discover}discover/tv/`,
};

config.Bar_Color = {
  green: "#21d07a",
  yellow: "#d2d531",
  red: "#db2360",
};

export default config;
