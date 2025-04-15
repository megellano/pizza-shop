"use client";
import React, { ChangeEvent, useState } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";

interface Props {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems: FilterCheckboxProps[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selectedIds: Set<string>;
  className?: string;
}
export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading = false,
  searchInputPlaceholder = "Znajdź...",
  className,
  onClickCheckbox,
  defaultValue,
  selectedIds,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>("");

  const list = showAll
    ? items.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems.slice(0, limit);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="mb-4 h-5.5" />)}
        <Skeleton className="mb-4 h-5.5 w-[100px]" />
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5 ">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            id={item.id}
            text={item.text}
            value={String(item.id)}
            onCheckedChange={() => onClickCheckbox?.(String(item.id))}
            key={index}
            endAdortment={null}
            name={item.name}
            checked={selectedIds.has(String(item.id))}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll((showAll) => !showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "mniej" : "+ pokaż więcej"}
          </button>
        </div>
      )}
    </div>
  );
};
