const Joi = require('@hapi/joi')

/* 
    register validasi: hanya field yg ada disini yg boleh jadi body.
    jadi kalau di body ada typo, misal "usedname", dia pasti not allowed

    lalu juga memvalidasi minimum karakter dan requirednya.
    disini yang paling terlihat adalah dia bisa menentukan minimum karakter.
*/

// register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        full_name: Joi.string().min(3).required(),
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
        phone_number: Joi.string().min(10).required(),
        email: Joi.string().min(6).required().email(),
        role: Joi.string()
    });
    return schema.validate(data);
}

// login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;