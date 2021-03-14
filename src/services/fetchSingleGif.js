import { API_URL, API_KEY } from "./settings";

const fromApiResponseToGif = (apiResponse) => {
  const { data } = apiResponse;
  const { title, id } = data;
  const { url } = data.images.downsized_medium;
  console.log(url);
  return { title, id, url };
};

export default function fetchSingleGif({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGif);
}
