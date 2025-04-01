import { cn } from "@/lib/utils";
import { ArrowDownUp } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}
export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 rounded-md cursor-pointer h-[52px]",
        className
      )}
    >
      <ArrowDownUp size={16} />
      <b>Najpierw:</b>
      <b className="text-primary">popolarne</b>
    </div>
  );
};
