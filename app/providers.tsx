"use client";

import { SWRConfig } from "swr";
import fetchJson from "@/lib/fetchJson";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "@/lib/muiTheme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <SessionProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
        </LocalizationProvider>
      </SessionProvider>
    </SWRConfig>
  );
}
