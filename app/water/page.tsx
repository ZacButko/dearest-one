import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import WaterForm from "./waterForm";
import { WaterTable } from "./WaterTable";
import { WaterProvider } from "./provider";
import { WaterQuickPicks } from "./WaterQuickPick";

async function getData() {
  const user = await getCurrentUser();
  const fluidUnits = await prisma.fluidUnit.findMany();
  if (user) {
    const waterLog = await prisma.waterLog.findMany({
      where: { user: user },
      orderBy: { timestamp: "desc" },
    });
    return { waterLog, fluidUnits };
  }
  return {
    waterLog: [],
    fluidUnits,
  };
}

export default async function Water() {
  const { waterLog, fluidUnits } = await getData();

  const now = new Date();
  return (
    <div className="flex flex-col gap-8 px-2 md:px-16">
      <WaterProvider fluidUnits={fluidUnits} initialWaterLog={waterLog}>
        <h1 className="text-4xl text-slate-100">Water</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <WaterQuickPicks />
            {/* <div className="rounded-md border-slate-600 bg-slate-700 p-4">
              <WaterForm />
            </div> */}
            <div className="flex flex-col gap-2">
              <WaterTable />
            </div>
          </div>
        </div>
      </WaterProvider>
    </div>
  );
}
