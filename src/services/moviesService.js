const API_KEY = process.env.REACT_APP_API_KEY

export function searchMovie(title, page) {
  let API_URL = `https://api.themoviedb.org/3/search/movie?api_key=003ceae904324e9bf221767e3b74d400&append_to_response=releases`

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
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=003ceae904324e9bf221767e3b74d400`)
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}
