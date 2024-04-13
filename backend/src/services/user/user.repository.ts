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

export default {
  save,
  findUserByEmail,
};
