import React from "react";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  id?: number;
  text: string;
  name: string;
  value: string;
  endAdortment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}
export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  name,
  value,
  endAdortment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-lg w-6 h-6"
        id={`filter-${name}-${String(value)}`}
      />
      <label
        htmlFor={`filter-${name}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdortment}
    </div>
  );
};
