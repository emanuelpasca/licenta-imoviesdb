import { API_KEY } from "./config";

const useFetchMovies = () => {
  const AJAX = async (type) => {
    try {
      const res = await fetch(`https://imdb-api.com/en/API/${type}/${API_KEY}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return AJAX;
};

export default useFetchMovies;
