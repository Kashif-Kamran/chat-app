import { prop, getModelForClass } from "@typegoose/typegoose";
import { Schema } from "mongoose";
import { User } from "../user/user.model";
import { Message } from "../message/message.model";

class Conversation {
  @prop({ type: Schema.Types.ObjectId, auto: true })
  _id!: string;

  @prop({ ref: "User", type: Schema.Types.ObjectId })
  members!: User[];

  @prop({ ref: "Message", type: Schema.Types.ObjectId })
  messages!: Message[];
}

const ConversationModel = getModelForClass(Conversation, {
  schemaOptions: { timestamps: true },
});

export { ConversationModel, Conversation };
