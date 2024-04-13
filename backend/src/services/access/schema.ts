import Joi from "joi";
import { JoiAuthBearer } from "../../middlewares/validator";

export default {
  register: Joi.object().keys({
    firstName: Joi.string()
      .required()
      .min(3)
      .max(32)
      .regex(/^[a-zA-Z\s]+$/)
      .messages({
        "string.empty": "First name cannot be an empty field",
        "string.min": "First name should have a minimum length of {#limit}",
        "string.max": "First name should have a maximum length of {#limit}",
        "string.pattern.base":
          "First name should cannont contain any number and special character",
        "any.required": "First name is a required field",
      }),
    lastName: Joi.string()
      .required()
      .min(3)
      .max(32)
      .regex(/^[a-zA-Z\s]+$/)
      .messages({
        "string.empty": "Last name cannot be an empty field",
        "string.min": "Last name should have a minimum length of {#limit}",
        "string.max": "Last name should have a maximum length of {#limit}",
        "string.pattern.base":
          "Last name should cannont contain any number and special character",
        "any.required": "Last name is a required field",
      }),
    email: Joi.string().email().required().messages({
      "string.base": "Email should be a type of text",
      "string.empty": "Email cannot be an empty field",
      "string.email": "Email should be a valid email",
      "any.required": "Email is a required field",
    }),
    password: Joi.string().required().min(8).max(32).messages({
      "string.empty": "Password cannot be an empty field",
      "string.min": "Password should have a minimum length of {#limit}",
      "string.max": "Password should have a maximum length of {#limit}",
      "any.required": "Password is a required field",
    }),
  }),

  login: Joi.object().keys({
    email: Joi.string().email().required().messages({
      "string.email": "Email should be valid email",
      "string.required": "Email is Required Feilds",
    }),
    password: Joi.string().required().messages({
      "string.required": "Password Feild Cannot be empty",
      "string.min": "Password should be a minimum length of {#limit}",
      "string.max": "Password should be a maximum length of {#limit}",
    }),
  }),

  accessToken: Joi.object()
    .keys({
      authorization: JoiAuthBearer().required().messages({
        "any.invalid":
          "Invalid Autherization Header: Valid Bearer token required",
        "any.required": "Bearer Token Not provided in Authorization Header",
      }),
    })
    .unknown(true),
};
