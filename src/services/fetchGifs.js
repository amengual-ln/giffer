const API_KEY = "LQcZAe89QblWN7uQ4hLlst81xQFP61gg"

export default function fetchGifs({ keyword = "star wars" } = {}) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=pg-13&lang=en`
    
    return fetch(API_URL).then(
    res => res.json().then(
        response => {
        const {data} = response
        const gifs = data.map(image => {
            const url = image.images.downsized_medium.url
            const title = image.title
            const id = image.id

            return { url, title, id}
        })
        return gifs
        }
    ))
}