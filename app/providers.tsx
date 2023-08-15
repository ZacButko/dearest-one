"use client";

import { SWRConfig } from "swr";
import fetchJson from "@/lib/fetchJson";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

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
      <SessionProvider>{children}</SessionProvider>
    </SWRConfig>
  );
}
