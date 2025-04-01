import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  className?: string;
}
export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img
            src={imageUrl ? imageUrl : "/placeholder.png"}
            alt={name}
            width={215}
            height={215}
            className="w-[215px] h-[215px]"
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-40">
          składniki, pomidor, ser, kapusta, sos, grzyby, ananas, śledź
        </p>
        <div className="flex justify-between items-centermt-4">
          <span className="text-[20px]">
            od <b>{price} zł.</b>
          </span>
          <Button
            variant="secondary"
            className="text-base font-bold text-primary"
          >
            <Plus size={20} className="mr-1" />
            Dodaj
          </Button>
        </div>
      </Link>
    </div>
  );
};
