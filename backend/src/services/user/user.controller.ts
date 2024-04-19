import {
  AuthFailureError,
  BadRequestError,
  NotFoundError,
} from "../../core/ApiError";
import UserDto from "./interfaces/User.Dto";
import UserRepository from "./user.repository";
import bcrypt from "bcrypt";
import { JwtPayload, encode } from "../../core/JWT";
import { UserRo } from "./interfaces/User.Ro";
import _ from "lodash";

// Function to return sanatized user Info
function sanatizeUser(userInfo: any): UserRo {
  return _.pick(userInfo, ["_id", "firstName", "lastName", "email"]);
}
// User Info
async function createUser(userInfo: UserDto) {
  const emailUser = await UserRepository.findUserByEmail(userInfo.email);
  if (emailUser)
    throw new BadRequestError("User with email address already exists");
  const updatedPassword = await bcrypt.hash(userInfo.password, 10);
  return await UserRepository.save({ ...userInfo, password: updatedPassword });
}
// Function to authenticate user (login)
async function authenticateUser(email: string, password: string) {
  const user = await UserRepository.findUserByEmail(email);
  if (!user) throw new AuthFailureError("User not registered");
  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) throw new AuthFailureError("Invalid Password");
  const jwtPayload = new JwtPayload(user._id, 1);
  const token = encode(jwtPayload);
  return {
    user: sanatizeUser(user),
    token: token,
  };
}

async function getUserById(userId: string | undefined) {
  if (!userId) throw new NotFoundError("User Not Found");
  const user = await UserRepository.findUserById(userId);
  if (!user) throw new NotFoundError("User not found");
  return user;
}
export default { createUser, authenticateUser, getUserById };
