import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const mililiter = await prisma.fluidUnit.upsert({
    where: { name: "mililiter" },
    update: {},
    create: {
      name: "mililiter",
      convertToML: 1,
    },
  });
  const liter = await prisma.fluidUnit.upsert({
    where: { name: "liter" },
    update: {},
    create: {
      name: "liter",
      convertToML: 1000,
    },
  });
  const ounce = await prisma.fluidUnit.upsert({
    where: { name: "ounce" },
    update: {},
    create: {
      name: "ounce",
      convertToML: 29.5735,
    },
  });
  const cup = await prisma.fluidUnit.upsert({
    where: { name: "cup" },
    update: {},
    create: {
      name: "cup",
      convertToML: 236.588,
    },
  });
  const pint = await prisma.fluidUnit.upsert({
    where: { name: "pint" },
    update: {},
    create: {
      name: "pint",
      convertToML: 473.176,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
