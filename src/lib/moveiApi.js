export async function getListOfMovies() {
  const path = '/discover/movie'
  const response = await fetchAuthenticated(path)
  const payload = await response.json()
  return payload.results.map(movie => {
    return {
      id: movie['id'],
      title: movie['title'],
      overview: movie['overview'],
      release_date: movie['release_date'],
      vote_average: movie['vote_average'],
      backdrop: getImageUrlFor(movie['backdrop_path']),
      poster: getImageUrlFor(movie['poster_path']),
    }
  })
}

function getImageUrlFor(path) {
  return `https://image.tmdb.org/t/p/original${path}`
}

const API_KEY = 'bcb3c69f8c60c73f797e465c8f371d66'
const BASE_URL = 'https://api.themoviedb.org/3'

async function fetchAuthenticated(path, ...args) {
  let url
  let pathArgs = ''
  for (const arg of args) {
    pathArgs += `${arg}&`
  }

  if (pathArgs.length > 0) {
    url = `${BASE_URL}${path}?${pathArgs}api_key=${API_KEY}`
  } else {
    url = `${BASE_URL}${path}?api_key=${API_KEY}`
  }
  return await fetch(url, {
    method: 'GET',
  })
}
