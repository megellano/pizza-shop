import { Ingredient } from "@prisma/client";

import { ApiRouts } from "./api-routs";
import { axiosInstance } from "./axios-instance";

// export interface IIngredientList {
//   ingredients: Ingredient[];
// }

export const getAll = async () => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRouts.INGREDIENTS);
  return data;
};
