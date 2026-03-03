import * as request from "./requester";

const BASE_URL = "https://carring-paws.onrender.com/petcatalog";

export const getFavoriteStatus = (dogId) =>
  request.get(`${BASE_URL}/${dogId}/favorite`);

export const toggleFavorite = (dogId) =>
  request.post(`${BASE_URL}/${dogId}/favorite`, {});  