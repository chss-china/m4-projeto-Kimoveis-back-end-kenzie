import { schemaAdress } from "../schemas/adress.schemas";
import { z } from "zod";
type Tadress = z.infer<typeof schemaAdress>;
export { Tadress };
