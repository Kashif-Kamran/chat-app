import { Request, Response, Router } from "express";
import AsyncHandler from "../../core/AsyncHandler";
import { SuccessfullyCreatedResponse } from "../../core/ApiResponse";
import UserDto from "../user/interfaces/User.Dto";
import userController from "../user/user.controller";
import validator, {
  ValidationSource,
} from "../../middlewares/request.validator";
import schema from "./schema";
const router = Router();

router.post(
  "/",
  validator(schema.register, ValidationSource.BODY),
  AsyncHandler(async (req: Request<{}, {}, UserDto>, res: Response) => {
    const userInfo = req.body;
    const result = await userController.createUser(userInfo);
    // sanatization
    new SuccessfullyCreatedResponse(
      "User Registered Successfully",
      result
    ).send(res);
  })
);

export default router;
