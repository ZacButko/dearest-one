"use client";
import { FluidUnit, WaterLog } from "@prisma/client";
import { ReactNode, createContext, useContext } from "react";

const WaterContext = createContext({
  fluidUnits: [] as Array<FluidUnit>,
  waterLog: [] as Array<WaterLog>,
});

export const WaterProvider = ({
  children,
  fluidUnits,
  waterLog,
}: {
  children: ReactNode;
  fluidUnits: Array<FluidUnit>;
  waterLog: Array<WaterLog>;
}) => {
  return (
    <WaterContext.Provider value={{ fluidUnits, waterLog }}>
      {children}
    </WaterContext.Provider>
  );
};

export const useFluidUnits = () => {
  const { fluidUnits } = useContext(WaterContext);
  return fluidUnits;
};
export const useWaterLog = () => {
  const { waterLog } = useContext(WaterContext);
  return waterLog;
};
