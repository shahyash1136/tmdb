import config from "./config";
import axios from "axios";

// Api Call
export const getData = (apiParams, callBack, errCallBack) => {
  // Make api cached
  makeAPICallAxios(apiParams, callBack, errCallBack);
};

export const makeQueryString = (data, url, isJson) => {
  /* if (isJson) {
    var queryNew = "";
    if (Object.keys(data).length !== 0 && data.constructor === Object) {
      Object.keys(data).forEach((item) => {
        queryNew = url.replace("{{" + item + "}}", data[item]);
        url = queryNew;
      });
    } else {
      queryNew = url;
    }
    return queryNew;
  } else { */
  var query = "";
  query = Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
  return query ? "?" + query : "";
  /* } */
};

export const makeAPICallAxios = (apiParams, callBack, errCallBack) => {
  //const isJson = apiParams.endPoint.indexOf(".json") > -1;
  const apiObj = {
    method: apiParams.type,
    name: apiParams.name,
  };

  /* if (!isJson) {
    apiObj.headers = config.headers;
    apiObj.credentials = "include";
  } */

  if (apiObj.method === "GET") {
    /* if (!isJson) {
      apiParams.endPoint = makeQueryString(
        apiParams.params,
        apiParams.endPoint,
        isJson
      );
    } else { */
    apiParams.endPoint = `${apiParams.endPoint}${makeQueryString(
      apiParams.params
    )}`;
    /* } */
  } else {
    apiObj.data = JSON.stringify(apiParams.params);
    apiObj.method = "POST";
  }

  apiObj.url = apiParams.endPoint;

  return axios(apiObj)
    .then((response) => {
      window.serverDate = response.headers.date;
      if (response.status !== 200) {
        throw Error(response.statusText);
      } else {
        const responseData = response.data;
        const data =
          responseData === "string"
            ? JSON.params(responseData.trim())
            : responseData;
        if (callBack) {
          callBack(data);
        }
      }
    })
    .catch((err) => {
      if (errCallBack) {
        errCallBack();
      }
    });
};

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
