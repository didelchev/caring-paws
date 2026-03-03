import * as request from "./requester";

const BASE_URL = "https://carring-paws.onrender.com/dashboard";

export const getDashboard = () => request.get(BASE_URL);