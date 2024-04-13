import { User } from "../user.model";
type UserDto = Pick<User, "firstName" | "lastName" | "email" | "password">;
export default UserDto;
