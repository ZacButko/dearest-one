"use client";
import { MobileDatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import { FluidUnit } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import { ChangeEvent, FormEvent, useState } from "react";
import dayjs from "dayjs";
import pluralize from "pluralize";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

const initialWaterFormData = {
  timestamp: new Date().getTime(),
  amountEntered: "0",
  unitUsed: 3,
};

const WaterForm = ({ fluidUnits }: { fluidUnits: Array<FluidUnit> }) => {
  const [state, setState] = useState(initialWaterFormData);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({ state });
  };

  const updateState = (key: string, value: any) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-3 items-center gap-8">
        <TextField
          id="amountEntered"
          value={state.amountEntered}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updateState("amountEntered", e.target.value)
          }
          label="Amount"
          type="tel"
        />
        <FormControl>
          <InputLabel id="unitUsed">Units</InputLabel>
          <Select
            id="unitUsed"
            label="Units"
            defaultValue={`${state.unitUsed}`}
            onChange={(e: SelectChangeEvent<string>) =>
              updateState("unitUsed", e.target.value)
            }
          >
            {fluidUnits.map((u) => (
              <MenuItem key={u.id} value={u.id}>
                {pluralize(
                  u.name,
                  isNaN(parseInt(state.amountEntered))
                    ? 0
                    : parseInt(state.amountEntered),
                )}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button size={"3"} role="submit">
          Record
        </Button>
        <MobileDatePicker
          label="Date"
          defaultValue={dayjs(state.timestamp)}
          onChange={(value) => updateState("timestamp", value?.valueOf())}
          value={dayjs(state.timestamp)}
        />
        <MobileTimePicker
          label="Time"
          defaultValue={dayjs(state.timestamp)}
          onChange={(value) => updateState("timestamp", value?.valueOf())}
          value={dayjs(state.timestamp)}
        />
      </div>
    </form>
  );
};

export default WaterForm;
