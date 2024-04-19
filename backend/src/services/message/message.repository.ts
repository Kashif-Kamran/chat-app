import _ from "lodash";
import MessageDto from "./interfaces/Message.Dto";
import { Message, MessageModel } from "./message.model";

function sanatized(message: Message) {
  return _.pick(message, ["_id", "senderId", "receiverId", "createdAt"]);
}

async function saveMessage(messageDto: MessageDto) {
  const messageCreationResponse = await MessageModel.create({
    ...messageDto,
  });

  return sanatized(messageCreationResponse);
}

export default {
  saveMessage,
};
