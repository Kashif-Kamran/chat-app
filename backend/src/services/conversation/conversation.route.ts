import { Response, Router } from "express";
import AsyncHandler from "../../core/AsyncHandler";
import { ProtectedRequest } from "../../types/app-request";
import { SuccessResponse } from "../../core/ApiResponse";
import { CreateConversationDto } from "./interfaces/Conversation.dto";
import ConversationController from "./conversation.controller";
import RequestValidator, {
  ValidationSource,
} from "../../middlewares/request.validator";
import schema from "./schema";
const conversationRoute = Router();

//
conversationRoute.post(
  "/",
  RequestValidator(schema.createConversationDto, ValidationSource.BODY),
  AsyncHandler(
    async (
      req: ProtectedRequest<{}, {}, CreateConversationDto>,
      res: Response
    ) => {
      const authUser = req.user!;
      const createConversationDto = req.body;
      createConversationDto.membersIds.push(authUser._id.toString());
      const creationResponse =
        await ConversationController.createNGetConversation(
          createConversationDto
        );
      return new SuccessResponse(
        "Conversation created successfully",
        creationResponse
      ).send(res);
    }
  )
);

//
export default conversationRoute;
