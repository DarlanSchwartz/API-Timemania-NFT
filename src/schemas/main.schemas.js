import joi from 'joi';

export const NewChestSchema = joi.object({
    name: joi.string().required(),
    cards: joi.array().required()
})

export const LoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).required()
})

export const RegisterSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    dataNascimento: joi.date().iso().required(),
    cpf: joi.string().required(),
    password: joi.string().min(3).required()
})

export const TeamSchema = joi.object({
    name: joi.string().required(),
})

export const CardSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    token:joi.string().required(),
    description:joi.string().required()
})