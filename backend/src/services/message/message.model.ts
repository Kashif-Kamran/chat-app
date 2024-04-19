import { getModelForClass, prop } from "@typegoose/typegoose";
import { Schema } from "mongoose";

class Message {
  @prop({ type: Schema.Types.ObjectId, auto: true })
  _id!: string;
  @prop({})
  public content!: string;
  @prop({ type: Schema.Types.ObjectId, ref: "User" })
  public senderId!: string;
  @prop({ type: Schema.Types.ObjectId, ref: "User" })
  public receiverId!: string;
  @prop({ default: false })
  public isRead!: boolean;
}

const MessageModel = getModelForClass(Message, {
  schemaOptions: { timestamps: true },
});
export { MessageModel, Message };
