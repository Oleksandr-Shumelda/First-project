"use strict";

const numberOfFilms = +prompt('How many films did you watch?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('What is your last watched movie?', ''),
      b = prompt('How do you rate it?', ''),
      c = prompt('What is your last watched movie?', ''),
      d = prompt('How do you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;  

console.log(personalMovieDB);

