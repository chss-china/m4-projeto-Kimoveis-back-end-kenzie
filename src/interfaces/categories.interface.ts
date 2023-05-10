import { z } from "zod";
import {
  createCategoriesSchema,
  createCategoriesSchemaRequest,
} from "../schemas/categories.schemas";
type TcategoriesRequest = z.infer<typeof createCategoriesSchemaRequest>;
type Tcategories = z.infer<typeof createCategoriesSchema>;

export { TcategoriesRequest, Tcategories };
