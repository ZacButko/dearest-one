import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import WaterForm from "./waterForm";
import getFluidUnits from "../actions/getFluidUnits";

async function getData() {
  const user = await getCurrentUser();
  if (user) {
    const waterLog = await prisma.waterLog.findMany({ where: { user: user } });
    return { waterLog };
  }
  return {
    waterLog: {},
  };
}

export default async function Water() {
  const { waterLog } = await getData();
  const fluidUints = await getFluidUnits();

  console.log({ waterLog });
  return (
    <div className="flex flex-col gap-8 px-2 md:px-16">
      <h1 className="text-4xl text-slate-100">Water</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="rounded-md border-slate-600 bg-slate-700 p-4">
            <WaterForm fluidUnits={fluidUints} />
          </div>
        </div>
      </div>
    </div>
  );
}
