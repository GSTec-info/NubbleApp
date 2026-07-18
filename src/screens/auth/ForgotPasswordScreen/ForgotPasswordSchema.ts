import { z } from "zod";
import { emailRegex } from "../SignUpScreen/SignUpSchema";

export const forgotPasswordSchema = z.object({
  email: z.string("Campo obrigatório").regex(emailRegex, "E-mail inválido"),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
