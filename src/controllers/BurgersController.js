import { Auth0Provider } from "@bcwdev/auth0provider";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

// NOTE Servers POV
export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers");
    this.router
      .get("", this.getAllBurgers)
      .post("", this.createBurger)
      .put("/:burgerId", this.updateBurger)
      .delete("/:burgerId", this.deleteBurger)
      // Auth0 Portion
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/auth", this.testAuth);
  }

  // GET | Retrieve all burgers & send back to client
  async getAllBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getAllBurgers();
      response.send(burgers);
    } catch (e) {
      next(e);
    }
  }

  // POST | Capture request sent from client. In this scenario user wants something created
  async createBurger(request, response, next) {
    try {
      const burgerData = request.body;
      const burger = await burgersService.createBurger(burgerData);
      response.send(burger);
    } catch (e) {
      next(e);
    }
  }

  // PUT | Capture BOTH route parameter to acquire ID & request from client. In this scenario user wants something updated
  async updateBurger(request, response, next) {
    try {
      const burgerData = request.body;
      const burgerId = request.params.burgerId;
      const updatedBurgerMsg = await burgersService.updateBurger(
        burgerId,
        burgerData
      );
      response.send(updatedBurgerMsg);
    } catch (e) {
      next(e);
    }
  }

  // DELETE | Capture route parameter to acquire the ID then delete as needed
  async deleteBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId;
      const deletedBurgerMsg = await burgersService.deleteBurger(burgerId);
      response.send(deletedBurgerMsg);
    } catch (e) {
      next(e);
    }
  }

  async testAuth(request, response, next) {
    console.log("testing auth");
    response.send(request.userInfo);
  }
}
