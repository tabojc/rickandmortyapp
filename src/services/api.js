import axios from 'axios';
const baseURL = 'https://rickandmortyapi.com/api';
const headers = { 'Access-Control-Allow-Origin': 'https://rickandmortyapi.com' };

function fetchCharacters(params) {
  return axios.get(`${baseURL}/character`, { params, headers }).then((response) => {
    return response.data.results;
  });
}

function fetchStarings(params) {
  return axios.get(`${baseURL}/character`, { params, headers }).then((response) => {
    return response.data;
  });
}

function fetchCharactersByIds(data) {
  const ids = data.join();
  return axios.get(`${baseURL}/character/[${ids}]`, { headers }).then((response) => {
    console.log('api', response.data);
    return response.data;
  });
}

function fetchLocations(params) {
  return axios.get(`${baseURL}/location`, { params, headers }).then((response) => {
    return response.data.results;
  });
}

function fetchEpisodes(params) {
  return axios.get(`${baseURL}/episode`, { params, headers }).then((response) => {
    return response.data.results;
  });
}

export {
  fetchCharacters,
  fetchCharactersByIds,
  fetchLocations,
  fetchEpisodes,
  fetchStarings,
};
