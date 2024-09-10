import { dbContext } from "../db/DbContext.js";

class SidesService {
  async createSide(sideData) {
    const side = await dbContext.Sides.create(sideData);
    return `${side.name} was added to the menu`;
  }
  async getAllSides() {
    const sides = await dbContext.Sides.find();
    return sides;
  }
  async updateSide(sideId, sideData) {
    const sideToUpdate = await dbContext.Sides.findByIdAndUpdate(
      sideId,
      sideData
    );
    return `${sideToUpdate.name} was updated`;
  }
  async deleteSide(sideId) {
    const sideToDelete = await dbContext.Sides.findByIdAndDelete(sideId);
    return `${sideToDelete.name} was deleted`;
  }
}

export const sidesService = new SidesService();
