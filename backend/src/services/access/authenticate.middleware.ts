import { NextFunction, Router, Request, Response } from "express";
import RequestValidator, {
  ValidationSource,
} from "../../middlewares/request.validator";
import schema from "./schema";
import AsyncHandler from "../../core/AsyncHandler";
import { ProtectedRequest } from "../../types/app-request";
import { AuthFailureError } from "../../core/ApiError";
import { validate } from "../../core/JWT";
import UserController from "../user/user.controller";
const authenticationRouter = Router();

authenticationRouter.use(
  RequestValidator(schema.accessToken, ValidationSource.HEADER),
  AsyncHandler(
    async (req: ProtectedRequest, res: Response, next: NextFunction) => {
      const authorization = req.headers.authorization;
      const accessToken = validateAndGetAccessToken(authorization);
      let payload = validate(accessToken);
      const user = await UserController.getUserById(payload.sub);
      req.user = user;
      req.accessToken = accessToken;
      return next();
    }
  )
);

function validateAndGetAccessToken(authorization: string | undefined) {
  if (!authorization) throw new AuthFailureError("Access token not found");
  if (!authorization.startsWith("Bearer"))
    throw new AuthFailureError("Please provide Bearer access token");
  let accessToken = authorization.split(" ")[1];
  if (!accessToken)
    throw new AuthFailureError("Please provide valid access token");
  return accessToken;
}

export default authenticationRouter;
