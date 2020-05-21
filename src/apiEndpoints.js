import axios from "axios";

const baseURl = "https://api.chucknorris.io/jokes/";

const getJokesCategories = () => axios.get(`${baseURl}categories`);

const getRandomJoke = () => axios.get(`${baseURl}random`);

const getRandomCategoryJoke = category => axios.get(`${baseURl}random?category=${category}`);

const searchJokes = query => axios.get(`${baseURl}search?query=${query}`);

export { getJokesCategories,getRandomJoke,getRandomCategoryJoke, searchJokes };

