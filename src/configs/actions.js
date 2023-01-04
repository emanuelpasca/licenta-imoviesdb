import { API_KEY } from "./config";

const useFetchMovies = () => {
  const AJAX = async (type) => {
    const res = await fetch(`https://imdb-api.com/en/API/${type}/${API_KEY}`);
    const data = res.json();
    return data;
  };

  return AJAX;
};

export default useFetchMovies;
