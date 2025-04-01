import React from "react";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdortment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}
export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdortment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-lg w-6 h-6"
        id={`checkbox${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdortment}
    </div>
  );
};
