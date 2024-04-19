import { Message } from "../../message/message.model";

type MessageDto = Pick<Message, "content" | "senderId" | "receiverId">;
export default MessageDto;
