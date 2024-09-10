import { drinksService } from "../services/DrinksService.js";
import BaseController from "../utils/BaseController.js";

export class DrinksController extends BaseController {
  constructor() {
    super("api/drinks");
    this.router
      .post("", this.createDrink)
      .get("", this.getDrinks)
      .put("/:drinkId", this.updateDrink)
      .delete("/:drinkId", this.deleteDrink);
  }

  async createDrink(request, response, next) {
    try {
      const drinkData = request.body;
      const drink = await drinksService.createDrink(drinkData);
      response.send(drink);
    } catch (e) {
      next(e);
    }
  }

  async getDrinks(request, response, next) {
    try {
      const drinks = await drinksService.getDrinks();
      response.send(drinks);
    } catch (e) {
      next(e);
    }
  }

  async updateDrink(request, response, next) {
    try {
      const drinkId = request.params.drinkId;
      const drinkData = request.body;
      const updatedDrinkMsg = await drinksService.updateDrink(
        drinkId,
        drinkData
      );
      response.send(updatedDrinkMsg);
    } catch (e) {
      next(e);
    }
  }

  async deleteDrink(request, response, next) {
    try {
      const drinkId = request.params.drinkId;
      const deletedDrinkMsg = await drinksService.deleteDrink(drinkId);
      response.send(deletedDrinkMsg);
    } catch (e) {
      next(e);
    }
  }
}
