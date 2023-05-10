import { z } from "zod";

/*address: um objeto com os seguintes dados:
street: string, máximo de 45 caracteres e obrigatório
zipCode: string, máximo de 8 caracteres e obrigatório
number: string, máximo de 7 caracteres e opcional
city: string, máximo de 20 caracteres e obrigatório
state: string, máximo de 2 caracteres e obrigatório*/
const schemaAdress = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional(),
  city: z.string().max(20),
  state: z.string().max(2),
});
export { schemaAdress };
