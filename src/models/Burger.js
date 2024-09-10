import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
  name: { type: String, required: true, maxLength: 60 },
  price: { type: Number, required: true, min: 0, max: 60 },
});
