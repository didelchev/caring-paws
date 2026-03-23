import { useState, useEffect } from "react";
import dogsAPI from "../api/dogs-api";

export function useGetAllDogs() {
  const [dogs, setDogs] = useState(null); 

  useEffect(() => {
    const getDogs = async () => {
      try {
        const dogsData = await dogsAPI.getAll();
        setDogs(dogsData);
      } catch (err) {
        console.error("Failed to fetch dogs:", err);
        setDogs([]); 
      }
    };
    getDogs();
  }, []);

  return [dogs, setDogs];
}

export function useGetOneDogs(id) {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    if (!id) return;
    const getDog = async () => {
      try {
        const result = await dogsAPI.getOne(id);
        setDog(result);
      } catch (err) {
        console.error("Failed to fetch dog:", err);
        setDog({});
      }
    };
    getDog();
  }, [id]);

  return [dog, setDog];
}

export function useCreateDog() {
  return (dogData) => dogsAPI.create(dogData);
}

export function useDeleteDog(dogId) {}