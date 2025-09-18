import { useState, useEffect } from "react";

import dogsAPI from "../api/dogs-api";

export function useGetAllDogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const dogsData = await dogsAPI.getAll();
      setDogs(dogsData);
    };
    getDogs();
  }, []);

  return [dogs, setDogs];
}

export function useSearchDogs(query){;
const [dogs, setDogs] = useState([]);

useEffect(() =>{
  if(query){
    dogsAPI.getSearchForDog(query)
      .then((result) =>{setDogs(result)
        console.log(result);
      })
      
      
  }else{
    dogsAPI.getAll()
      .then((result) => {setDogs(result)})
  }
},[query])
  
  return [dogs]
}

export function useGetOneDogs(id) {
  const [dog, setDog] = useState({
    name: "",
    breed: "",
    color: "",
    age: "",
    sex: "",
    size: "",
    location: "",
    description: "",
    imageUrl: "",
    phone: "",
  });

  useEffect(() => {
    const getDog = async () => {
      const result = await dogsAPI.getOne(id);
      setDog(result);
    };
    getDog();
  }, [id]);

  return [dog, setDog];
}

export function useCreateDog() {
  const dogCreateHandler = (dogData) => dogsAPI.create(dogData);

  return dogCreateHandler;
}

export function useDeleteDog(dogId) {}

