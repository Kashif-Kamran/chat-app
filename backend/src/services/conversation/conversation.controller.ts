import { BadRequestError, NotFoundError } from "../../core/ApiError";
import { Message } from "../message/message.model";
import { checkIfValidMongooseId } from "../share/MongooseUtils";
import UserRepository from "../user/user.repository";
import { Conversation } from "./conversation.model";
import conversationRepository from "./conversation.repository";
import ConversationRepository from "./conversation.repository";
import { CreateConversationDto } from "./interfaces/Conversation.dto";

async function createNGetConversation(
  createConversationDto: CreateConversationDto
) {
  // Check if all of these are valid ids
  const anyInvalidId = !createConversationDto.membersIds.every(
    (memberId: string) => checkIfValidMongooseId(memberId)
  );
  if (anyInvalidId) throw new NotFoundError("Invalid user id found");
  // Check concurenlty if all members exist using promise all`
  const membersExist = await Promise.all(
    createConversationDto.membersIds.map((member) =>
      UserRepository.findUserById(member)
    )
  );
  // If any member does not exist, return null
  if (membersExist.includes(null)) {
    throw new NotFoundError("One or more members do not exist");
  }

  const conversationAlreadyExist = await conversationRepository.getByMembersIds(
    createConversationDto.membersIds
  );

  if (conversationAlreadyExist) {
    return conversationAlreadyExist;
  }

  // If all members exist, create a conversation
  const conversation = await ConversationRepository.save(
    createConversationDto.membersIds
  );
  return conversation;
}

async function getConversationForMemberIds(membersIds: string[]) {
  return await ConversationRepository.getByMembersIds(membersIds);
}

async function sendMessageToConversation(
  conversation: Conversation,
  message: Message
) {
  if (!checkIfValidMongooseId(conversation._id.toString()))
    throw new BadRequestError("Invalid Conversation");
  if (!checkIfValidMongooseId(message._id.toString()))
    throw new BadRequestError("Invalid Message Id");
  return await ConversationRepository.addMessage(conversation._id, message._id);
}
export default {
  createNGetConversation,
  getConversationForMemberIds,
  sendMessageToConversation,
};
