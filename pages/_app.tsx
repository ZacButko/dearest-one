import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<T> = AppProps<T> & {
  Component: NextPageWithLayout;
};

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) => {
  const { session, ...restPageProps } = pageProps;
  const getLayout = Component.getLayout ?? ((page) => page);
  const page = getLayout(<Component {...restPageProps} />);
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <SessionProvider session={session}>{page}</SessionProvider>
    </SWRConfig>
  );
};

export default App;
