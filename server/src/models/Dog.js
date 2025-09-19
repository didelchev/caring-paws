import { model, Schema, Types } from "mongoose";

const dogSchema = new Schema({
  name: {
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
  imageUrl: {
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
  _ownerId: {
     type: Types.ObjectId,
     ref: 'User'
  }
});


const Dog = model("Dog", dogSchema)


export default Dog