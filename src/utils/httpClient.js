const API = "https://api.themoviedb.org/3";

export function get(path) {

  return fetch(API + path, {
    headers: {

         Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc4YTk0Zjc3NDdiZTIyOTUwOGVlMzM1NmIyNjFlMCIsInN1YiI6IjYyN2EwY2MwZDQwMGYzMGRhNTc3NWYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UGg3qJnmFW0hD9ApYgnbnx_MJYx3eAGzRLplJTwjqKg",

      "Content-Type": "application/json;charset=utf-8",
    },
    }).then((result) => result.json());
}

//convierto en json genero ruta/ api-content-type copiar autirizacion de web