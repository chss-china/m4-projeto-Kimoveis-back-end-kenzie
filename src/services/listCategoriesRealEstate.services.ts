import { Repository } from "typeorm";
import { Tcategories } from "../interfaces/categories.interface";
import { Category, RealEstate } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { TrealEstateCategory } from "../interfaces/realEstate.interface";
export const listCategorieRealEstateService = async (
  id: number
): Promise<Category> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: { id: id },
    relations: {
      realEstate: true,
    },
  });

  return category!;
};
