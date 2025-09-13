import * as request from "./requester";


const BASE_URL = "http://localhost:3030/data/dogs"

export const getAll =  async () => { 
    const result = await request.get(BASE_URL);
     
    const dogData = Object.values(result);

    return dogData
}
 

export const getFeatured = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
    })

    const stringParams = urlSearchParams.toString();
    

    const result = await request.get(`${BASE_URL}?${stringParams}`);

    const featuredDogs = Object.values(result);

    return featuredDogs
}

export const getSearchForDog = async (dogData) => {
    // Prepare the query string with double quotes around the dogData
    const searchParams = `name="${encodeURIComponent(dogData)}" OR breed="${encodeURIComponent(dogData)}"`;
    
    // Encode only the 'where' parameter
    const encodedParams = `where=${encodeURIComponent(searchParams)}`;
    
    // Make the GET request using the encoded search parameters
    const result = await request.get(`${BASE_URL}?${encodedParams}`);

    // Assuming 'result' is already an array of dog objects
    return result;
}



export const getOne =  (id) => request.get(`${BASE_URL}/${id}`)

export const create = (dogData) => request.post(`${BASE_URL}`, dogData)

export const remove = (dogId) => request.del(`${BASE_URL}/${dogId}`)

export const update = (dogId, dogData) => request.put(`${BASE_URL}/${dogId}`, dogData) 



const dogsAPI = {
    getAll,
    getFeatured,
    getSearchForDog,
    getOne,
    create,
    remove,
    update,
}


export default dogsAPI