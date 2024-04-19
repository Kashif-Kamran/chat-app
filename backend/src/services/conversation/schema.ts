import Joi from "joi";
export default {
  createConversationDto: Joi.object().keys({
    membersIds: Joi.array()
      .items(Joi.string().required())
      .min(1)
      .required()
      .messages({
        "array.base": "Members should be an array",
        "array.min": "Members should have at least one member",
        "array.includesRequiredUnknowns": "Members should contain only string",
        "any.required": "Members is a required field",
      }),
  }),
};
