import prisma from "@/lib/prismadb";

export default async function getFluidUnits() {
  const fluidUnits = await prisma.fluidUnit.findMany();
  return fluidUnits;
}
