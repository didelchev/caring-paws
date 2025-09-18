import { model, Schema } from "mongoose";

const dogSchema = new Schema({
  dogName: {
    type: String,
    required: [true, "Dog name is required !"],
  },
  breed: {
    type: String,
    required: [true, "Breed is required !"],
  },
  color: {
    type: String,
    required: [true, "Color is required !"],
  },
  age: {
    type: String,
    required: [true, "Age is required !"]
  },
  image: {
    type: String,
    required: [true, "Image  is required !"],
  },
  sex: {
    type: String,
    required: [true, "Sex is required !"],
  },
  size: {
    type: String,
    required: [true, "Size is required !"],
  },
  location: {
    type: String,
    required: [true, "Locations is required !"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required !"],
  },
  description: {
    type: String,
  },
});


const Dog = model("Dog", dogSchema)


export default Dog