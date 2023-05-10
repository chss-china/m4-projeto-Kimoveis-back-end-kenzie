import { Repository } from "typeorm";
import {
  Tcategories,
  TcategoriesRequest,
} from "../interfaces/categories.interface";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { createCategoriesSchema } from "../schemas/categories.schemas";

export const createCategoryService = async (
  userData: TcategoriesRequest
): Promise<Tcategories> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category: Category = categoryRepository.create(userData);
  await categoryRepository.save(category);
  const returnUser: Tcategories = createCategoriesSchema.parse(category);
  return returnUser;
};
