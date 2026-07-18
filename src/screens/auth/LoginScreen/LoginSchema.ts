import { z } from "zod";
import { emailMessageError, emailRegex, passwordMessageError, passwordRegex } from "../SignUpScreen/SignUpSchema";

export const loginSchema = z.object({
  email: z.string("Campo obrigatório").regex(emailRegex, emailMessageError),
  password: z.string("Campo obrigatório").min(1, "Senha Obrigatória").regex(passwordRegex, passwordMessageError),
});

export type LoginSchema = z.infer<typeof loginSchema>;
