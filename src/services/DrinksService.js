import { dbContext } from "../db/DbContext.js";

class DrinksService {
  async deleteDrink(drinkId) {
    const drink = await dbContext.Drinks.findByIdAndDelete(drinkId);
    return `${drink.name} was removed from the menu`;
  }
  async updateDrink(drinkId, drinkData) {
    const drink = await dbContext.Drinks.findByIdAndUpdate(drinkId, drinkData);
    return `${drink.name} was updated`;
  }
  async createDrink(drinkData) {
    const drink = await dbContext.Drinks.create(drinkData);
    return `${drink.name} was created`;
  }
  async getDrinks() {
    const drinks = await dbContext.Drinks.find();
    return drinks;
  }
}

export const drinksService = new DrinksService();
