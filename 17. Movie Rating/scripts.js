const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTcwOWQxY2U5MTM0NTI4N2ViMjlmOTJiNTdiMjUwZCIsIm5iZiI6MTY5NTYyNzg0MS4xNTYsInN1YiI6IjY1MTEzYTQxM2E0YTEyMDExY2Y0MTAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MzTXg1SQ1iZNjE0fFbXkA1OKRAdNrJKMy8gikArlJTU&page=1'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTcwOWQxY2U5MTM0NTI4N2ViMjlmOTJiNTdiMjUwZCIsIm5iZiI6MTY5NTYyNzg0MS4xNTYsInN1YiI6IjY1MTEzYTQxM2E0YTEyMDExY2Y0MTAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MzTXg1SQ1iZNjE0fFbXkA1OKRAdNrJKMy8gikArlJTU'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
