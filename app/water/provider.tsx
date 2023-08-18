"use client";
import { FluidUnit, WaterLog } from "@prisma/client";
import dayjs from "dayjs";
import { ReactNode, createContext, useContext, useState } from "react";

const WaterContext = createContext<{
  addWaterLog: (log: WaterLog) => void;
  fluidUnits: Array<FluidUnit>;
  waterLog: Array<WaterLog>;
}>({
  fluidUnits: [],
  waterLog: [],
  addWaterLog: () => undefined,
});

export const WaterProvider = ({
  children,
  fluidUnits,
  initialWaterLog,
}: {
  children: ReactNode;
  fluidUnits: Array<FluidUnit>;
  initialWaterLog: Array<WaterLog>;
}) => {
  const [waterLog, setWaterLog] = useState<Array<WaterLog>>(initialWaterLog);

  const addWaterLog = (entry: WaterLog) => {
    setWaterLog(
      [...waterLog, entry].sort((a, b) =>
        dayjs(a.timestamp).isAfter(dayjs(b.timestamp)) ? -1 : 1,
      ),
    );
  };
  return (
    <WaterContext.Provider value={{ fluidUnits, waterLog, addWaterLog }}>
      {children}
    </WaterContext.Provider>
  );
};

export const useWaterContext = () => {
  return useContext(WaterContext);
};

export const useFluidUnits = () => {
  const { fluidUnits } = useContext(WaterContext);
  return fluidUnits;
};
export const useWaterLog = () => {
  const { waterLog } = useContext(WaterContext);
  return waterLog;
};
