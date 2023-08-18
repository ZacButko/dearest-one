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
import { useFluidUnits } from "./provider";

const initialWaterFormData = {
  timestamp: dayjs().valueOf(),
  amountEntered: "0",
  unitUsedId: 3,
};

const WaterForm = () => {
  const fluidUnits = useFluidUnits();
  const [state, setState] = useState(initialWaterFormData);
  const [errors, setErrors] = useState<{ amountEntered?: boolean }>({});

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const amount = state.amountEntered;
    if (amount && !isNaN(parseInt(amount)) && parseInt(amount) !== 0) {
      setErrors({});
      const data = {
        amountEntered: parseInt(amount),
        timestamp: state.timestamp,
        unitUsedId: state.unitUsedId,
      };
      const submit = async () => {
        const res = await fetch("/api/water", {
          method: "POST",
          body: JSON.stringify(data),
        });
        const body = res.json();
        console.log("body", body);
      };
      void submit();
    } else {
      setErrors({ amountEntered: true });
    }
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
          error={errors.amountEntered}
        />
        <FormControl>
          <InputLabel id="unitUsedId">Units</InputLabel>
          <Select
            id="unitUsedId"
            label="Units"
            defaultValue={`${state.unitUsedId}`}
            onChange={(e: SelectChangeEvent<string>) =>
              updateState("unitUsedId", e.target.value)
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
          onChange={(value) => updateState("timestamp", value?.valueOf())}
          value={dayjs(state.timestamp)}
        />
        <Button
          size="2"
          variant="surface"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            updateState("timestamp", dayjs().valueOf());
          }}
        >
          Now
        </Button>
      </div>
    </form>
  );
};

export default WaterForm;
