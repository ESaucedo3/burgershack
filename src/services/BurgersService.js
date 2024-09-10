import { dbContext } from "../db/DbContext.js";

class BurgersService {
  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData);
    return burger;
  }
  async getAllBurgers() {
    const burgers = await dbContext.Burgers.find();
    return burgers;
  }
  async updateBurger(burgerId, burgerData) {
    const burgerToUpdate = await dbContext.Burgers.findByIdAndUpdate(
      burgerId,
      burgerData
    );
    if (!burgerToUpdate) {
      throw new Error("The burger couldnt be updated");
    }
    return `${burgerToUpdate.name} was updated`;
  }
  async deleteBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId);
    if (!burgerToDelete) {
      throw new Error("There is no burger with that ID. Bad ID");
    }
    await burgerToDelete.deleteOne();
    return `${burgerToDelete.name} was removed from menu`;
  }
}

export const burgersService = new BurgersService();
