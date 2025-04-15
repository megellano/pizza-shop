"use client";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();

  const ingredientsList: FilterCheckboxProps[] = ingredients?.map((ing) => ({
    id: ing.id,
    text: ing.name,
    value: String(ing.id),
    name: "ingredient",
  }));

  return (
    <div className={className}>
      <Title size="sm" text="Filtr" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="dop" text="Można kombinować" value="1" />
        <FilterCheckbox name="dop" text="Nowości" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Cena od / do:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={3000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="3000"
            min={1}
            max={3000}
            defaultValue={3000}
          />
        </div>
        <RangeSlider min={0} max={3000} step={1} />
      </div>
      <CheckboxFiltersGroup
        title={"Składniki"}
        className="mt-5"
        items={ingredientsList}
        defaultItems={ingredientsList.slice(0, 6)}
        limit={6}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
        loading={loading}
      />
    </div>
  );
};
