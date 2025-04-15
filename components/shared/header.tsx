import { cn } from "@/lib/utils";
import React from "react";

import Image from "next/image";
import { Button } from "../ui";
import { Container, SearchInput } from ".";
import { ArrowRight, ShoppingBasket, User } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8 gap-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Super pizza</h1>
              <p className="text-sm text-gray-500 leading-3">niema lepszej</p>
            </div>
          </div>
        </Link>
        <div className="flex-1">
          <SearchInput />
        </div>

        <div className="items-center flex gap-3">
          <Button variant={"outline"} className="flex items-center gap-1">
            <User size={16} />
            Wejście
          </Button>
          <div>
            <Button className={"group relative"}>
              <b>500 zł.</b>
              <span className="h-full w-[1px] mx-3 bg-white/30"></span>
              <div className="flex gap-1 items-center transition duration-300 group-hover:opacity-0">
                <ShoppingBasket
                  size={16}
                  className="relative"
                  strokeWidth={2}
                />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
