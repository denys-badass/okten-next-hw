import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        "string.pattern": "Brand must be a string between 1 and 20 characters long",
        "string.empty": "Brand cannot be empty",
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        "number.min": "Year must be at least 1990",
        "number.max": "Year must be at most 2024",
        "number.empty": "Year cannot be empty",
    }),
    price: Joi.number().min(0).max(1_000_000).required().messages({
        "number.min": "Price must be at least 0",
        "number.max": "Price must be at most 1,000,000",
        "number.empty": "Price cannot be empty",
    }),
})