import React from "react";

import {useNavigate} from 'react-router-dom'
import { useForm } from "../../hooks/useForm";
import { useCreateDog } from "../../hooks/useDogs";

import "./PostPet.css";


const initialValues = {
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
}

export default function PostPet(){ 
  const navigate = useNavigate()
  const createDog = useCreateDog();

  const createHandler = async (values) => {
    try {
      
      const { _id: dogId }= await createDog(values);

      navigate(`/petcatalog/${dogId}`)

    } catch (error) {
      console.log(error.message)
    }
    
  }

  const { values, changeHandler, submitHandler} = useForm(initialValues, createHandler)

  return (
    <div className="page">
      <div className="image"></div>
      <div className="post-pet-form-container">
        <h1>List a Pet for Adoption</h1>
        <form className="post-pet-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={values.name} onChange={changeHandler}required />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Breed</label>
            <input type="text" id="breed" name="breed" value={values.breed} onChange={changeHandler}required />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input type="text" id="color" name="color" value={values.color} onChange={changeHandler} required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={values.age} onChange={changeHandler} required />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sex</label>
            <select id="sex" name="sex" value={values.sex} onChange={changeHandler}required>
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <select id="size" name="size" value={values.size} onChange={changeHandler}required >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={values.location} onChange={changeHandler} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone for contact</label>
            <input type="text" id="phone" name="phone" value={values.phone} onChange={changeHandler} required />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="text" id="image" name="imageUrl"  value= {values.imageUrl} onChange={changeHandler}  />
          </div>


          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={values.description} onChange={changeHandler} required></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Post Pet
          </button>
        </form>
      </div>
    </div>
  );
};

