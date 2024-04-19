import { Request, Response, Router } from "express";
import AsyncHandler from "../../core/AsyncHandler";
import { SuccessResponse } from "../../core/ApiResponse";
import UserController from "../user/user.controller";
import RequestValidator, {
  ValidationSource,
} from "../../middlewares/request.validator";
import schema from "./schema";

interface LoginRequestBody {
  email: string;
  password: string;
}

const router = Router();

router.get(
  "/",
  RequestValidator(schema.login, ValidationSource.BODY),
  AsyncHandler(
    async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
      const loginInfo = req.body;
      const authencationDetails = await UserController.authenticateUser(
        loginInfo.email,
        loginInfo.password
      );
      return new SuccessResponse("Login Successful", authencationDetails).send(
        res
      );
    }
  )
);

export default router;
