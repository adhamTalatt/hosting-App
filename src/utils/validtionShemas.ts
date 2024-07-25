import { z } from "zod";

// create article Schema
export const creatArticleSchena = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title should be of type string",
    })
    .min(2, "title Must be more than 2 character")
    .max(200),
  description: z.string().min(2),
});

export const creatRegisterUserSchema = z.object({
  email: z.string().min(3).max(200).email(),
  username: z.string().min(3).max(200),
  password: z.string().min(6),
});

export const loginUserSchema = z.object({
  email: z.string().min(3).max(200).email(),
  password: z.string().min(6),
});
