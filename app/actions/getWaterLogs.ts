import prisma from "@/lib/prismadb";

export interface IWaterLogParams {
  userId?: string;
  id?: string;
}

export default async function getWaterLogs(params: IWaterLogParams) {
  try {
    const { userId, id } = params;

    const query: IWaterLogParams = {};

    if (userId) {
      query.userId = userId;
    }

    if (id) {
      query.id = id;
    }

    const logs = await prisma.waterLog.findMany({
      where: query,
      orderBy: {
        timestamp: "desc",
      },
    });

    return logs;
  } catch (error: any) {
    throw new Error(error);
  }
}
