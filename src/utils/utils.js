export const checkResponse = (res) => {
  if (!res.ok) {
    return res.json().then(err => {
      throw new Error(`Ошибка: ${res.status} - ${err.message || ''}`);
    });
  }
  return res.json();
};
export const filterMovies = (movies, query) => {
  return movies.filter(movie => 
    movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
    movie.nameEN.toLowerCase().includes(query.toLowerCase())
  )
}
export const filterShortMovies = (movies) => {
  return movies.filter(movie => movie.duration <= 40)
}