const Joi = require('joi');

module.exports = {
  // POST /v1/auth/register
  register: {
    body: {
      email: Joi.string()
        .min(10)
        .required(),
      password: Joi.string()
        .required()
        .min(6)
        .max(128),
      cmp: Joi.number()
        .required(),
      room: Joi.string()
        .required(),
      phoneNumber: Joi.string()
        .required()
    },
  },

  // POST /v1/auth/login
  login: {
    body: {
      email: Joi.string()
        .min(9)
        .required(),
      password: Joi.string()
        .required()
        .max(128),
    },
  },

  // POST /v1/auth/facebook
  // POST /v1/auth/google
  oAuth: {
    body: {
      access_token: Joi.string().required(),
    },
  },

  // POST /v1/auth/refresh
  refresh: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      refreshToken: Joi.string().required(),
    },
  },

  // POST /v1/auth/refresh
  sendPasswordReset: {
    body: {
      email: Joi.string()
        .email()
        .required(),
    },
  },

  // POST /v1/auth/password-reset
  passwordReset: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .required()
        .min(6)
        .max(128),
      resetToken: Joi.string().required(),
    },
  },

  // POST api/v1/auth/join
  join: {
    body: {
      fullName: Joi.string().required(),
      dni: Joi.string().required(),
      email: Joi.string().email().required(),
      phoneNumber: Joi.string().required(),
      providerId: Joi.string(),
      room: Joi.string(),
      record: Joi.string()
    }
  },
};
