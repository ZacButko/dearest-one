import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { timestamp, amountEntered, unitUsedId } = body;

  if (!timestamp || !amountEntered || !unitUsedId) {
    return NextResponse.error();
  }

  const fluidUnit = await prisma.fluidUnit.findUnique({
    where: { id: unitUsedId },
  });

  if (!fluidUnit) return NextResponse.error();

  const waterLog = await prisma.waterLog.create({
    data: {
      timestamp: new Date(timestamp),
      amountEntered,
      unitUsedId,
      amountML: amountEntered * fluidUnit.convertToML,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(waterLog);
}
