import { getModelForClass, prop } from "@typegoose/typegoose";
import { Schema } from "mongoose";

class User {
  @prop({ type: Schema.Types.ObjectId, auto: true }) _id!: string;
  @prop()
  firstName!: string;
  @prop()
  lastName!: string;
  @prop()
  email!: string;
  @prop()
  password!: string;
  @prop({ default: new Date() })
  createdAt: Date = new Date();
}

const UserModel = getModelForClass(User);

export { UserModel, User };
