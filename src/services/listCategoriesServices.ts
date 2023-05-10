import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { Tcategories } from "../interfaces/categories.interface";
import { Category } from "../entities";
import { getCategoriesSchema } from "../schemas/categories.schemas";

export const listCategorieService = async (): Promise<Tcategories[]> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category = await categoryRepository.find();
  const categoryResponse: Tcategories[] = getCategoriesSchema.parse(category);

  return categoryResponse;
};
