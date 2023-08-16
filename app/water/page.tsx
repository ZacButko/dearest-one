import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import WaterForm from "./waterForm";
import { FluidUnit, WaterLog } from "@prisma/client";
import pluralize from "pluralize";

async function getData() {
  const user = await getCurrentUser();
  const fluidUnits = await prisma.fluidUnit.findMany();
  if (user) {
    const waterLog = await prisma.waterLog.findMany({ where: { user: user } });
    return { waterLog, fluidUnits };
  }
  return {
    waterLog: [],
    fluidUnits,
  };
}

export default async function Water() {
  const { waterLog, fluidUnits } = await getData();

  console.log({ waterLog });
  return (
    <div className="flex flex-col gap-8 px-2 md:px-16">
      <h1 className="text-4xl text-slate-100">Water</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="rounded-md border-slate-600 bg-slate-700 p-4">
            <WaterForm fluidUnits={fluidUnits} />
          </div>
          <div className="flex flex-col gap-2">
            {waterLog.map((l) => (
              <WaterRecord key={l.id} log={l} fluidUnits={fluidUnits} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const WaterRecord = ({
  log,
  fluidUnits,
}: {
  log: WaterLog;
  fluidUnits: Array<FluidUnit>;
}) => {
  const unit = fluidUnits.find((u) => u.id === log.unitUsedId);
  return (
    <div className="border-slate-900 bg-slate-700 p-4">
      {log.amountEntered} {pluralize(unit?.name as string, log.amountEntered)}{" "}
      {new Date(log.timestamp).toLocaleString()}
    </div>
  );
};
