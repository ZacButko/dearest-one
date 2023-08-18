"use client";
import Image from "next/image";
import { useFluidUnits, useWaterContext } from "./provider";
import { FluidUnit } from "@prisma/client";
import pluralize from "pluralize";
import { BsCup, BsCupStraw } from "react-icons/bs";
import dayjs from "dayjs";

const WaterQuickPick = ({
  amount,
  fluidUnitId,
}: {
  amount: number;
  fluidUnitId: number;
}) => {
  const fluidUnits = useFluidUnits();
  const { addWaterLog } = useWaterContext();
  const unit = fluidUnits.find((fl) => fl.id === fluidUnitId) as FluidUnit;
  const totalML = amount * unit.convertToML;
  const Icon = totalML <= 473 ? BsCup : BsCupStraw;

  const onSubmit = () => {
    const data = {
      amountEntered: amount,
      timestamp: dayjs().valueOf(),
      unitUsedId: fluidUnitId,
    };
    const submit = async () => {
      const res = await fetch("/api/water", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const body = await res.json();
      addWaterLog(body);
    };
    void submit();
  };

  return (
    <div
      className=" flex basis-36 flex-col items-center rounded-xl fill-white stroke-white p-6 hover:bg-sky-700"
      onClick={onSubmit}
    >
      <div className="flex h-10 w-10 items-stretch">
        <Icon height="100%" width="100%" size="100%" />
      </div>
      <div>
        {amount} {pluralize(unit.name, amount)}
      </div>
    </div>
  );
};

const quickPicks = [
  {
    amount: 4,
    fluidUnitId: 3,
  },
  {
    amount: 8,
    fluidUnitId: 3,
  },
  {
    amount: 16,
    fluidUnitId: 3,
  },
  {
    amount: 24,
    fluidUnitId: 3,
  },
  {
    amount: 32,
    fluidUnitId: 3,
  },
];

export const WaterQuickPicks = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly">
      {quickPicks.map((qp, index) => (
        <WaterQuickPick key={index} {...qp} />
      ))}
    </div>
  );
};
