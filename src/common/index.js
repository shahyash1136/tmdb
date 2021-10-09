import config from "./config";
import axios from "axios";

//local storage
export function getLocalStorage(key) {
  const localData = localStorage.getItem(`${config.nameSpaceKey}-${key}`);
  if (localData === null) {
    return false;
  }
  try {
    return JSON.parse(localData);
  } catch (error) {
    return false;
  }
}

export function setLocalStorage(key, value) {
  localStorage.setItem(`${config.nameSpaceKey}-${key}`, JSON.stringify(value));
}

export function removeLoaclStorage(key) {
  localStorage.removeItem(key);
}

export function isUndefined(value) {
  return typeof value === undefined;
}

/* export function getLoginCookie(){
    let cookie = getCookie(config.COOKIE_GM);
} */
