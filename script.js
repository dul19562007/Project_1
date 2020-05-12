'use strict'

const  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('Какую дадите оценку этому фильму?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('Какую дадите оценку этому фильму?', '');

const perconalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

perconalMovieDB.movies[a] = b;
perconalMovieDB.movies[c] = d;

console.log(perconalMovieDB);



