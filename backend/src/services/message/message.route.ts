import { Router, Response } from "express";
import AsyncHandler from "../../core/AsyncHandler";
import { ProtectedRequest } from "../../types/app-request";
import { SuccessResponse } from "../../core/ApiResponse";
import MessageController from "./message.controller";
import MessageDto from "./interfaces/Message.Dto";
import RequestValidator, {
  ValidationSource,
} from "../../middlewares/request.validator";
import ConversationalController from "../conversation/conversation.controller";
import schema from "./schema";
import { NotFoundError } from "../../core/ApiError";
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

      // Check if the conversation exists between the members
      let conversation =
        await ConversationalController.getConversationForMemberIds([
          req.user?._id.toString()!,
          req.body.receiverId,
        ]);

      if (!conversation)
        throw new NotFoundError(
          "Please initiate a conversation first between members"
        );

      const messageCreatedResponse =
        await MessageController.createMessageForUser(req.body, authUser._id);

      await ConversationalController.sendMessageToConversation(
        conversation,
        messageCreatedResponse
      );

      return new SuccessResponse("Message Sent.", {
        conversationId: conversation._id,
        message: messageCreatedResponse,
      }).send(res);
    }
  )
);

export default messageRouter;
