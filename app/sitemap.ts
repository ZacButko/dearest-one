import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://dearest.one",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://dearest.one/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
