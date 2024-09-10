import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ValueSchema } from "../models/Value";
import { BurgerSchema } from "../models/Burger.js";
import { SideSchema } from "../models/Side.js";
import { DrinkSchema } from "../models/Drink.js";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Burgers = mongoose.model("Burger", BurgerSchema);
  Sides = mongoose.model("Side", SideSchema);
  Drinks = mongoose.model("Drink", DrinkSchema);
}

export const dbContext = new DbContext();
