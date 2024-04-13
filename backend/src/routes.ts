import { Router } from "express";
import accessRoutes from "./services/access";
const routes = Router();
// access routes
routes.use("/access", accessRoutes);

//
export default routes;
