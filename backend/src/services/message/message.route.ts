import { Router, Response } from "express";
import AsyncHandler from "../../core/AsyncHandler";
import { ProtectedRequest } from "../../types/app-request";
import {
  SuccessMessageResponse,
  SuccessResponse,
} from "../../core/ApiResponse";
import MessageController from "./message.controller";
import MessageDto from "./interfaces/Message.Dto";
import RequestValidator, {
  ValidationSource,
} from "../../middlewares/request.validator";
import schema from "./schema";
const messageRouter = Router();

messageRouter.post(
  "/",
  RequestValidator(schema.createMessageDto, ValidationSource.BODY),
  AsyncHandler(
    async (
      req: ProtectedRequest<{}, {}, Partial<MessageDto>>,
      res: Response
    ) => {
      // Authenticate the user and fill the request with userInfo
      let authUser = req.user!;
      console.log("Request Body : ", req.body);
      const createResponse = await MessageController.createMessageForUser(
        req.body,
        authUser._id
      );
      return new SuccessResponse("Message Sent.", createResponse).send(res);
    }
  )
);

export default messageRouter;
