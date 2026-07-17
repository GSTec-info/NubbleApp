import { z } from "zod";

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string("Campo obrigatório").regex(userNameRegex, "Nome de usuário inválido"),
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
  email: z.string("Campo obrigatório").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "E-mail inválido"),
  password: z
    .string("Campo obrigatório")
    .min(8, "Deve ter pelo menos 8 caracteres")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/, "Deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"),
});

export type SignUpFormProps = z.infer<typeof signUpSchema>;
