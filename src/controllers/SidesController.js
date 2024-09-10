import { sidesService } from "../services/SidesService.js";
import BaseController from "../utils/BaseController.js";

export class SidesController extends BaseController {
  constructor() {
    super("api/sides");
    this.router
      .get("", this.getAllSides)
      .post("", this.createSide)
      .put("/:sideId", this.updateSide)
      .delete("/:sideId", this.deleteSide);
  }

  async createSide(request, response, next) {
    try {
      const sideData = request.body;
      const side = await sidesService.createSide(sideData);
      response.send(side);
    } catch (e) {
      next(e);
    }
  }
  async getAllSides(request, response, next) {
    try {
      const sides = await sidesService.getAllSides();
      response.send(sides);
    } catch (e) {
      next(e);
    }
  }

  async updateSide(request, response, next) {
    try {
      const sideId = request.params.sideId;
      const sideData = request.body;
      const updatedSideMsg = await sidesService.updateSide(sideId, sideData);
      response.send(updatedSideMsg);
    } catch (e) {
      next(e);
    }
  }

  async deleteSide(request, response, next) {
    try {
      const sideId = request.params.sideId;
      const deleteSideMsg = await sidesService.deleteSide(sideId);
      response.send(deleteSideMsg);
    } catch (e) {
      next(e);
    }
  }
}
