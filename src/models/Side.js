import { Schema } from "mongoose";

export const SideSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  price: { type: Number, required: true, min: 0.75, max: 7.0 },
});
