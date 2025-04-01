import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title size="sm" text="Filtr" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Można kombinować" value="1" />
        <FilterCheckbox text="Nowości" value="2" />
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
        items={[
          {
            text: "Syr",
            value: "1",
          },
          {
            text: "Mocarella",
            value: "2",
          },
          {
            text: "Czosnek",
            value: "3",
          },
          {
            text: "Cebula",
            value: "4",
          },
          {
            text: "Kiszony ogórek",
            value: "5",
          },
          {
            text: "Słonina",
            value: "6",
          },
          {
            text: "Grzyby",
            value: "7",
          },
          {
            text: "Czosnek",
            value: "3",
          },
          {
            text: "Cebula",
            value: "4",
          },
          {
            text: "Kiszony ogórek",
            value: "5",
          },
          {
            text: "Słonina",
            value: "6",
          },
          {
            text: "Grzyby",
            value: "7",
          },
        ]}
        defaultItems={[
          {
            text: "Syr",
            value: "1",
          },
          {
            text: "Mocarella",
            value: "2",
          },
          {
            text: "Czosnek",
            value: "3",
          },
          {
            text: "Cebula",
            value: "4",
          },
          {
            text: "Kiszony ogórek",
            value: "5",
          },
          {
            text: "Słonina",
            value: "6",
          },
        ]}
        limit={6}
      />
    </div>
  );
};
