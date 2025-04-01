"use client";
import { cn } from "@/lib/utils";
import { useStoryCategoryState } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats: { id: number; name: string }[] = [
  { id: 1, name: "Pizza" },
  { id: 2, name: "Kombo" },
  { id: 3, name: "Snack" },
  { id: 4, name: "Koktaile" },
  { id: 5, name: "Kawa" },
  { id: 6, name: "Napoje" },
  { id: 7, name: "Desetrty" },
  { id: 8, name: "Kiełbaski" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveIndex: number = useStoryCategoryState(
    (state) => state.activeId
  );
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-md", className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 px-5 rounded-md",
            categoryActiveIndex === cat.id &&
              "bg-white shadow-md shadow-gray-200 text-primary",
            className
          )}
          key={index}
          href={`#${cat.name}`}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  );
};
