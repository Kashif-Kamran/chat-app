import { Request } from "express";
import { extend } from "lodash";
import { User } from "../services/user/user.model";

interface ProtectedRequest<T = {}, U = {}, V = {}> extends Request {
  user?: User;
  accessToken?: string;
}
