import UserDto from "./interfaces/User.Dto";
import bcrypt from "bcrypt";
import { User, UserModel } from "./user.model";
import _ from "lodash";
function sanitize(user: User) {
  return _.pick(user, ["_id", "firstName", "lastName", "email", "password"]);
}

async function save(userDto: UserDto) {
  const creationResponse = await UserModel.create({
    ...userDto,
  });
  return sanitize(creationResponse);
}

async function findUserByEmail(email: string) {
  const userByEmail = await UserModel.findOne({ email: email });
  return userByEmail ? sanitize(userByEmail) : null;
}

async function findUserById(userId: string) {
  const userById = await UserModel.findOne({ _id: userId });
  return userById ? sanitize(userById) : null;
}

export default {
  save,
  findUserByEmail,
  findUserById,
};
