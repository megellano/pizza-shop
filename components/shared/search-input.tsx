"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

import { Search } from "lucide-react";
import { Backdrop } from "./backdrop";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import Image from "next/image";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

interface Props {
  className?: string;
}
export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  const searchPlate = useRef<HTMLInputElement>(null);

  useClickAway(searchPlate, () => setFocused(false));

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((data) => {
        setProducts(data.products);
      });
    },
    250,
    [searchQuery]
  );

  const onClickHendler = () => {
    setFocused(false);
    setSearchQuery("");
    // setProducts([]);
  };

  return (
    <>
      {focused && <Backdrop />}
      <div
        className={cn("flex  relative justify-between h-9 z-30", className)}
        ref={searchPlate}
      >
        <Search
          width={20}
          height={20}
          className="left-3 absolute translate-y-[-50%] top-1/2"
        />
        <input
          placeholder="Znajdź..."
          className="pl-11 outline-none w-full bg-gray-100 rounded-md "
          value={searchQuery}
          onFocus={() => setFocused(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div
          className={cn(
            "absolute w-full bg-white rounded-md py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          {products?.map((product, index) => (
            <Link
              href={`/product/${product.id}`}
              key={index}
              onClick={onClickHendler}
            >
              <div className="px-3 py-0.5 hover:bg-primary/10 flex gap-2 items-center">
                <Image
                  src={
                    product.imageUrl ? product.imageUrl : "/img/placeholder.png"
                  }
                  width={35}
                  height={35}
                  alt={product.name}
                />
                <span className="">{product.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
