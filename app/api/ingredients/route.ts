import { prisma } from "@/prisma/prisma-client";
import { Ingredient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const ingredients: Ingredient[] = await prisma.ingredient.findMany();
  return NextResponse.json(ingredients);
}
