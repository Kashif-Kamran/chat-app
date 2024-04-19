import { getModelForClass, prop } from "@typegoose/typegoose";

class Message {
  @prop({})
  public content!: string;
  @prop({ ref: "User" })
  public senderId!: string;
  @prop({ ref: "User" })
  public receiverId!: string;
  @prop({ default: Date.now() })
  public createdAt?: Date;
}

const MessageModel = getModelForClass(Message, {
  schemaOptions: { timestamps: true },
});
export { MessageModel, Message };
