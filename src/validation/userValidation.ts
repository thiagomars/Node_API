import Joi from 'joi';

export const registerUserSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        'string.base': 'Nome deve ser um texto',
        'string.min': 'Nome deve ter no mínimo 3 caracteres',
        'any.required': 'Nome é obrigatório',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'E-mail inválido',
        'any.required': 'E-mail é obrigatório',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'Senha deve ter no mínimo 6 caracteres',
        'any.required': 'Senha é obrigatória',
    }),
});

export const loginUserSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'E-mail inválido',
        'any.required': 'E-mail é obrigatório',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'Senha deve ter no mínimo 6 caracteres',
        'any.required': 'Senha é obrigatória',
    }),
});
