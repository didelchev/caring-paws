import * as request from "./requester";

const BASE_URL = "https://carring-paws.onrender.com/petcatalog";

export const getComments = (dogId) =>
  request.get(`${BASE_URL}/${dogId}/comments`);

export const createComment = (dogId, text) =>
  request.post(`${BASE_URL}/${dogId}/comments`, { text });

export const deleteComment = (dogId, commentId) =>
  request.del(`${BASE_URL}/${dogId}/comments/${commentId}`);