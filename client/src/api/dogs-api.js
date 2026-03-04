import * as request from "./requester";


// const BASE_URL = "http://localhost:5000/catalog"
const BASE_URL = "https://carring-paws.onrender.com/petcatalog"

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
    const searchParams = `name="${encodeURIComponent(dogData)}" OR breed="${encodeURIComponent(dogData)}"`;
    
    const encodedParams = `where=${encodeURIComponent(searchParams)}`;
    
    const result = await request.get(`${BASE_URL}?${encodedParams}`);

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