import { Router } from "express";
import accessRoutes from "./services/access";
import messageRouter from "./services/message/message.route";
import authenticationRouter from "./services/access/authenticate.middleware";
const routes = Router();
// access routes
routes.use("/access", accessRoutes);
routes.use(authenticationRouter);
routes.use("/message", messageRouter);
//
export default routes;
