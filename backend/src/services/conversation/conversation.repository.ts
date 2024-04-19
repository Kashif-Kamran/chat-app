import { Message } from "../message/message.model";
import { ConversationModel } from "./conversation.model";

async function save(members: string[], messages: Message[] = []) {
  const conversation = await ConversationModel.create({
    members,
    messages,
  });
  return conversation;
}

async function getByMembersIds(memberIds: string[]) {
  return await ConversationModel.findOne({
    members: { $all: memberIds },
  });
}

async function addMessage(conversationId: string, messageId: string) {
  // convert message Id to mongoose object id
  return ConversationModel.updateOne(
    { _id: conversationId },
    { $push: { messages: messageId } }
  );
}
export default { save, getByMembersIds, addMessage };
