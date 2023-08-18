"use client";

import { WaterLog } from "@prisma/client";
import dayjs from "dayjs";
import pluralize from "pluralize";
import { useState } from "react";
import { useFluidUnits, useWaterLog } from "./provider";

const WaterRecord = ({ log }: { log: WaterLog }) => {
  const fluidUnits = useFluidUnits();
  const unit = fluidUnits.find((u) => u.id === log.unitUsedId);
  return (
    <div className="grid grid-cols-3 border-slate-900 bg-slate-700 p-4 text-center">
      <div>
        {log.amountEntered} {pluralize(unit?.name as string, log.amountEntered)}{" "}
      </div>
      <div>{dayjs(log.timestamp).format("hh:mm A")}</div>
      <div>...</div>
    </div>
  );
};

export const WaterTable = () => {
  const waterLog = useWaterLog();
  const now = dayjs();
  const [timeWindow, setTimeWindow] = useState({
    start: now.startOf("day"),
    end: now.endOf("day"),
  });

  const logsToShow = waterLog.filter(
    (l) =>
      dayjs(l.timestamp).isBefore(timeWindow.end) &&
      dayjs(l.timestamp).isAfter(timeWindow.start),
  );
  return (
    <div>
      Water drank today
      {logsToShow.map((l) => (
        <WaterRecord log={l} key={l.id} />
      ))}
    </div>
  );
};
