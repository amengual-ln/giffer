const API_KEY = "LQcZAe89QblWN7uQ4hLlst81xQFP61gg"

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    if (Array.isArray(data)) {
      const gifs = data.map(image => {
        const {images, title, id} = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    }
    return []
  }
  
  export default function fetchGifs ({limit = 10, keyword = '404', page = '0'} = {}) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=R&lang=en`
  
    return fetch(API_URL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
  }