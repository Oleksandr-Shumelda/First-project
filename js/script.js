"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("How many films did you watch?", "");
 
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films did you watch?", "");
  }
}

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



//const a = prompt("Your last film?", ""),
//      b = prompt("Do you like it?", ""),
      

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
  const a = prompt("Your last film?", ""),
        b = prompt("Do you like it?", "");


if (a != null && b != null && a != "" && b != "" && a.length < 50) {
  personalMovieDB.movies[a] = b;
  console.log("done");
} else {
  console.log("error");
  i--;
}        
}
}

rememberMyFilms();

function detectPersonalLevel() {
if (personalMovieDB.count < 10 ) {
  console.log("Few movies watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You are a classic spectator");
} else if ( personalMovieDB.count > 30) {
  console.log("You are a movies buff");
} else {
  console.log("An error occurred");
}
}

detectPersonalLevel();

function showMyDB (hidden) {
if (! hidden) {
  console.log(personalMovieDB);
}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre under the number ${i}`);
  }
}

writeYourGenres();
      
//console.log(personalMovieDB);


//function showMyDB(privat) {
  //console.log(showMyDB); 
//} 

