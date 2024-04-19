import MessageDto from "./interfaces/Message.Dto";
import messageRepository from "./message.repository";
import { checkIfValidMongooseId } from "../share/MongooseUtils";

import { NotFoundError } from "../../core/ApiError";
import UserRepository from "../user/user.repository";

async function createMessageForUser(messsageDto: MessageDto, senderId: string) {
  if (!checkIfValidMongooseId(messsageDto.receiverId))
    throw new NotFoundError("Invalid receiver of message");
  if (!checkIfValidMongooseId(senderId.toString()))
    throw new NotFoundError("Invalid sender of message");
  //   check if receiver occures
  const receiver = await UserRepository.findUserById(messsageDto.receiverId);
  if (!receiver)
    throw new NotFoundError("Receiver has been deleted or not found");
  messsageDto.senderId = senderId;
  const messageSaveResponse = await messageRepository.saveMessage(messsageDto);
  return messageSaveResponse;
}

export default {
  createMessageForUser,
};
