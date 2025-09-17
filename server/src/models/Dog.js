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
    type: Number,
    required: [true, "Age is required !"],
    validate: {
      validator: function (value) {
        return value > 0;
      },
      message: "Age must be a positive number !",
    },
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