import config from "./config";
import { Home } from "./Importer";
import { Movies } from "./Importer";

const data = [
  {
    name: "home",
    nameCompare: "home",
    title: "home",
    path: `${config.BASE_DOMAIN}`,
    group: "home",
    component: Home,
    isAuthReq: false,
    fallBackName: "Home",
    isTabMenu: true,
    loadWODep: false,
    isStandAlone: true,
    isCommonPage: true,
    isSubMenu: false,
  },
  {
    name: "movies",
    nameCompare: "movies",
    title: "movies",
    path: `${config.BASE_DOMAIN}movies`,
    group: "movies",
    component: Movies,
    isAuthReq: false,
    fallBackName: "Movies",
    isTabMenu: true,
    loadWODep: false,
    isStandAlone: true,
    isCommonPage: true,
    isSubMenu: false,
  },
];

export default data;
