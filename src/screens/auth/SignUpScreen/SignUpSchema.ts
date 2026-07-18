import { z } from "zod";

export const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;
export const userNameMessageError = "Nome de usuário inválido";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const emailMessageError = "E-mail inválido";

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/;
export const passwordMessageError = "Deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial";

export const signUpSchema = z.object({
  username: z.string("Campo obrigatório").regex(userNameRegex, userNameMessageError),
  fullName: z
    .string("Campo obrigatório")
    .min(5, "nome muito curto")
    .max(50, "nome muito longo")
    .transform((value) =>
      value
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    ),
  email: z.string("Campo obrigatório").regex(emailRegex, emailMessageError),
  password: z.string("Campo obrigatório").min(8, "Deve ter pelo menos 8 caracteres").regex(passwordRegex, passwordMessageError),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
