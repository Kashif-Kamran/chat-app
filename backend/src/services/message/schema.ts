import Joi from "joi";
export default {
  createMessageDto: Joi.object().keys({
    content: Joi.string()
      .required()
      .min(3)
      .max(32)
      .regex(/^[a-zA-Z\s]+$/)
      .messages({
        "string.empty": "Content cannot be an empty field",
        "string.min": "Content should have a minimum length of {#limit}",
        "string.max": "Content should have a maximum length of {#limit}",
        "string.pattern.base":
          "Content should cannont contain any number and special character",
        "any.required": "Content is a required field",
      }),
    receiverId: Joi.string().required().min(3).max(32).messages({
      "string.empty": "Receiver Id cannot be an empty field",
      "string.min": "Receiver Id should have a minimum length of {#limit}",
      "string.max": "Receiver Id  should have a maximum length of {#limit}",
      "string.pattern.base":
        "Receiver Id should cannont contain any number and special character",
      "any.required": "Receiver Id is a required field",
    }),
  }),
};
