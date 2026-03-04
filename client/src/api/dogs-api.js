import * as request from "./requester";

const BASE_URL = "https://carring-paws.onrender.com/petcatalog"

// Your Express backend returns a plain array from Dog.find(),
// so no Object.values() needed — that was for SoftUni's object-based backend.
export const getAll = () => request.get(BASE_URL)

export const getOne = (id) => request.get(`${BASE_URL}/${id}`)

export const create = (dogData) => request.post(`${BASE_URL}`, dogData)

export const remove = (dogId) => request.del(`${BASE_URL}/${dogId}`)

export const update = (dogId, dogData) => request.put(`${BASE_URL}/${dogId}`, dogData)

const dogsAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
}

export default dogsAPI