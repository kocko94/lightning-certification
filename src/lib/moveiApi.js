const cached = {}

export async function getUpcomingMovies() {
  const key = 'upcoming_movies'
  return await fetchAndCache(key, async () => {
    const path = '/movie/upcoming'
    const response = await fetchAuthenticated(path, 'language=en-US')
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
  })
}

export function getDetailsForMovie(movieId) {
  const movieNumber = Number(movieId)
  for (const key in cached) {
    for (const movie of cached[key]) {
      if (movie.id === movieNumber) {
        return movie
      }
    }
  }
  throw new Error('Not found movie... You should be looking for movies which are cached!')
}

function getImageUrlFor(path) {
  return `https://image.tmdb.org/t/p/original${path}`
}

async function fetchAndCache(key, fetchFunc) {
  if (key in cached) {
    console.debug(`data for key ${key} was taken from cache`)
    return cached[key]
  } else {
    console.debug(`data for key ${key} was taken from web`)
    const data = await fetchFunc()
    cached[key] = data
    return data
  }
}

async function fetchAuthenticated(path, ...args) {
  const API_KEY = 'bcb3c69f8c60c73f797e465c8f371d66'
  const BASE_URL = 'https://api.themoviedb.org/3'
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
