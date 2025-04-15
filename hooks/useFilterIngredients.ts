"use client";
import { Api } from "@/services/api-client";

import { Ingredient } from "@prisma/client";

import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients: () => ReturnProps = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedIds, { toggle }] = useSet(new Set([]));

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients: Ingredient[] = await Api.ingredients.getAll();

        setIngredients(ingredients);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchIngredients();
  }, []);

  return { ingredients, loading, selectedIds, onAddId: toggle };
};
