// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((element) => {
    return element.director
  })
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const directorMovies = movies.filter(movie => movie.director === director);
  console.log("EXERCICE 2 ->", directorMovies);
  return directorMovies
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const directorMovies = movies.filter(movie => movie.director === director);
  const average = directorMovies.reduce((acc, movie) => acc + movie.score, 0) / directorMovies.length;
  console.log("EXERCICE 3 ->", average);
  return average
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const sortedMovies = movies.slice().sort((a, b) => a.title.localeCompare(b.title));
  return sortedMovies.slice(0, 20).map((movie) => movie.title);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortedMoviesYear = movies.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  })
  console.log("EXERCICE 5 ->", sortedMoviesYear);
  return sortedMoviesYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const moviesByCategory = movies.filter(movie => movie.genre.includes(category) && movie.score);
  const totalScore = moviesByCategory.reduce((acc, movie) => acc + movie.score, 0);
  const average = (totalScore / moviesByCategory.length);
  console.log("EXERCICE 6 ->", average);
  return average

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map(movie => {
      const movieCopy = { ...movie };
      let hours = 0;
      let minutes = 0;

      if (movie.duration.includes('h')) {
          hours = parseInt(movie.duration.match(/(\d+)h/)[1]) * 60;
      }
      if (movie.duration.includes('min')) {
          minutes = parseInt(movie.duration.match(/(\d+)min/)[1]);
      }

      movieCopy.duration = hours + minutes;

      return movieCopy;
  });
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesByYear = movies.filter(movie => movie.year === year);
  const bestMovie = moviesByYear.reduce((theBest, movie) => {
    return (movie.score > theBest.score) ?  movie : theBest;
  });
  return [bestMovie];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
