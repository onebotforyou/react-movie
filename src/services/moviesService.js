export function searchMovie(title, page) {
  let API_URL = `https://api.themoviedb.org/3/search/movie?api_key=e3c0618ba610d05f0cad7907bbac952c&append_to_response=releases`

  return new Promise((resolve, reject) => {
    fetch(`${API_URL}&query=${encodeURI(title)}&page=${page}`)
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export function getDetailedMovie(movieID) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=e3c0618ba610d05f0cad7907bbac952c`)
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}