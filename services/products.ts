import { Product } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { ApiRouts } from "./api-routs";

interface ProductsList {
  products: Product[];
}

export const search = async (searchQuery: string): Promise<ProductsList> => {
  const { data } = await axiosInstance.get<ProductsList>(
    ApiRouts.SEARCH_PRODUCTS,
    {
      params: { q: searchQuery },
    }
  );

  return data;
};
