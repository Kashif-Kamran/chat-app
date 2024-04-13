import { Router } from "express";
import loginRoute from "./login.route";
import registerRoute from "./register.route";

const router = Router();

router.use("/login", loginRoute);
router.use("/register", registerRoute);

export default router;
