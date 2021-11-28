const Joi = require("joi");

const contactValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    need: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports.contactValidation = contactValidation;
