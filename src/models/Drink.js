import { Schema } from "mongoose";

export const DrinkSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 13 },
  price: { type: Number, required: true, min: 2.5, max: 9.7 },
});
