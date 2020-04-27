
export function searchMovie(title, page) {
  let API_URL = `https://www.omdbapi.com/?apiKey=b445ca0b&s=avenger`

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
    fetch(`https://www.omdbapi.com/?apiKey=b445ca0b&s=avenger`)
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}
