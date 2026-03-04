import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateDog } from "../../hooks/useDogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw, faImage, faLocationDot, faPhone,
  faVenusMars, faRuler, faPalette, faDog
} from "@fortawesome/free-solid-svg-icons";
import "./PostPet.css";

const initialValues = {
  name: "", breed: "", color: "", age: "",
  sex: "", size: "", location: "", description: "",
  imageUrl: "", phone: "",
};

export default function PostPet() {
  const navigate = useNavigate();
  const createDog = useCreateDog();
  const [submitError, setSubmitError] = useState("");

  const createHandler = async (values) => {
    setSubmitError("");
    try {
      const { _id: dogId } = await createDog(values);
      navigate(`/petcatalog/${dogId}`);
    } catch (error) {
      setSubmitError(error.message || "Something went wrong.");
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

  return (
    <div className="post-page">

      {/* Left panel */}
      <div className="post-left">
        <div className="post-left-inner">
          <div className="post-brand">
            <FontAwesomeIcon icon={faPaw} />
            <span>Caring Paws</span>
          </div>
          <h1 className="post-headline">Give a pet<br />a loving home</h1>
          <p className="post-subline">
            A few minutes is all it takes to connect your pet with
            thousands of caring adopters across the country.
          </p>
          <div className="post-perks">
            <div className="post-perk">✓ Free to list</div>
            <div className="post-perk">✓ Reach thousands of adopters</div>
            <div className="post-perk">✓ Edit or remove anytime</div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="post-right">
        <div className="post-card">
          <div className="post-card-header">
            <h2>List a Pet for Adoption</h2>
            <p>Fill in the details below and your listing will go live immediately.</p>
          </div>

          <form className="post-form" onSubmit={submitHandler}>

            <div className="post-section-label">About the pet</div>

            <div className="post-field-row">
              <div className="post-field">
                <label htmlFor="name">
                  <FontAwesomeIcon icon={faDog} /> Name
                </label>
                <input
                  id="name" name="name" type="text"
                  placeholder="e.g. Buddy"
                  value={values.name} onChange={changeHandler} required
                />
              </div>
              <div className="post-field">
                <label htmlFor="breed">
                  <FontAwesomeIcon icon={faPaw} /> Breed
                </label>
                <input
                  id="breed" name="breed" type="text"
                  placeholder="e.g. Golden Retriever"
                  value={values.breed} onChange={changeHandler} required
                />
              </div>
            </div>

            <div className="post-field-row">
              <div className="post-field">
                <label htmlFor="age">Age (years)</label>
                <input
                  id="age" name="age" type="number" min="0" max="25"
                  placeholder="e.g. 2"
                  value={values.age} onChange={changeHandler} required
                />
              </div>
              <div className="post-field">
                <label htmlFor="color">
                  <FontAwesomeIcon icon={faPalette} /> Color
                </label>
                <input
                  id="color" name="color" type="text"
                  placeholder="e.g. Golden"
                  value={values.color} onChange={changeHandler} required
                />
              </div>
            </div>

            <div className="post-field-row">
              <div className="post-field">
                <label><FontAwesomeIcon icon={faVenusMars} /> Sex</label>
                <div className="post-radio-row">
                  {["male", "female"].map((s) => (
                    <label key={s} className={`post-radio-card ${values.sex === s ? "selected" : ""}`}>
                      <input type="radio" name="sex" value={s} checked={values.sex === s} onChange={changeHandler} />
                      {s === "male" ? "♂ Male" : "♀ Female"}
                    </label>
                  ))}
                </div>
              </div>
              <div className="post-field">
                <label><FontAwesomeIcon icon={faRuler} /> Size</label>
                <div className="post-radio-row">
                  {[
                    { val: "small", label: "Small", sub: "< 10kg" },
                    { val: "medium", label: "Medium", sub: "10–25kg" },
                    { val: "large", label: "Large", sub: "25–45kg" },
                    { val: "giant", label: "Giant", sub: "45kg+" },
                  ].map(({ val, label, sub }) => (
                    <label key={val} className={`post-radio-card post-radio-card--size ${values.size === val ? "selected" : ""}`}>
                      <input type="radio" name="size" value={val} checked={values.size === val} onChange={changeHandler} />
                      <span className="prc-label">{label}</span>
                      <span className="prc-sub">{sub}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="post-section-label">Contact & Location</div>

            <div className="post-field-row">
              <div className="post-field">
                <label htmlFor="location">
                  <FontAwesomeIcon icon={faLocationDot} /> Location
                </label>
                <input
                  id="location" name="location" type="text"
                  placeholder="e.g. Sofia"
                  value={values.location} onChange={changeHandler} required
                />
              </div>
              <div className="post-field">
                <label htmlFor="phone">
                  <FontAwesomeIcon icon={faPhone} /> Contact Phone
                </label>
                <input
                  id="phone" name="phone" type="text"
                  placeholder="e.g. +359 88 123 4567"
                  value={values.phone} onChange={changeHandler} required
                />
              </div>
            </div>

            <div className="post-section-label">Photo & Description</div>

            <div className="post-field">
              <label htmlFor="imageUrl">
                <FontAwesomeIcon icon={faImage} /> Photo URL
              </label>
              <input
                id="imageUrl" name="imageUrl" type="text"
                placeholder="https://example.com/photo.jpg"
                value={values.imageUrl} onChange={changeHandler}
              />
              {values.imageUrl && (
                <div className="post-img-preview">
                  <img
                    src={values.imageUrl} alt="preview"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              )}
            </div>

            <div className="post-field">
              <label htmlFor="description">Description</label>
              <textarea
                id="description" name="description" rows={4}
                placeholder="Describe the pet's personality, energy level, and anything adopters should know…"
                value={values.description} onChange={changeHandler}
              />
            </div>

            {submitError && <p className="post-error">{submitError}</p>}

            <button type="submit" className="post-btn-submit">
               List Pet for Adoption
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}