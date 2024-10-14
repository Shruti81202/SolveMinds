const { z } = require("zod");
const loginSchema = z.object({
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(11, { message: "Email must be of atleast 11 characters" })
    .max(255, { message: "Email must not be more than 20 characters" }),
    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be of atleast 8 characters" })
    .max(15, { message: "Password must not be more than 15 characters" }),
});
const signupSchema = loginSchema.extend({
    username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of atleast 3 characters" })
    .max(20, { message: "Name must not be more than 20 characters" }),
    phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be of atleast 10 characters" })
    .max(15, { message: "Phone must not be more than 15 characters" }),
});
module.exports = {loginSchema,signupSchema};