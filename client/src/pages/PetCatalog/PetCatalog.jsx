import React, { useMemo } from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import {useGetAllDogs} from '../../hooks/useDogs';


import PetCard from "../../components/PetCard/PetCard";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

import "./PetCatalog.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export default function PetCatalog() {  
  const [query, setQuery] = useState('')
  const [dogs, setDogs] = useGetAllDogs()



  const filteredDogs = useMemo(() =>{
    return dogs.filter((dog) =>{
      return (
        dog.name.toLowerCase().includes(query) ||
        dog.breed.toLowerCase().includes(query) ||
        dog.location.toLowerCase().includes(query)
        
      )
    })
  },[dogs,query])
  

  const onSubmit = (e) =>{
    e.preventDefault();

  }


  const onChange = (e) =>{
    setQuery(e.target.value)
  }
  
  
  return (
    <>
    {!dogs ?  <Loading/> : 
    <>
    <form className="search" onSubmit={onSubmit}>
    <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} size="2x" /></span>
    <input value ={query} onChange={onChange} type="search" placeholder="Search for a dog ..." /> 
    </form>      
    <div className="catalog-page">
        {filteredDogs.map((dog) => (
          <Link to={`/petcatalog/${dog._id}`} key ={dog._id} >
          <PetCard 
          img = {dog.imageUrl}
          name = {dog.name}
          breed = {dog.breed}
          age = {dog.age}
          location = {dog.location}/>
        </Link>
        ))}
      </div>
      <Footer/>
    </>}
      </>
  );
}

