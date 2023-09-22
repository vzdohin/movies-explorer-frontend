import { BEATFILM_MOVIE_URL } from "./constants";
import { checkResponse } from "./utils";

export function getBeatfilmMovies () {
  return fetch(BEATFILM_MOVIE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => checkResponse(res))
}
