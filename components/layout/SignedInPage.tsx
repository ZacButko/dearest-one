import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "@/app/fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { ReactNode, Suspense } from "react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Head from "next/head";

export const metadata = {
  title: "Dearast One",
  description:
    "Daily support and motivation, personalied for you, the dearest one.",
  twitter: {
    card: "summary_large_image",
    title: "Dearest One - Daily support and motivation.",
    description:
      "Dearest One is the app that's all about you. Track your daily habits. Get motivated. Feel loved.",
    creator: "@ZacButko",
  },
  metadataBase: new URL("https://dearest.one"),
  themeColor: "#0085FB",
};

const SignedInPage = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Theme appearance="dark" accentColor="blue" grayColor="slate">
        <Head>
          <title>D1 - About</title>
        </Head>
        <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900"></div>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 text-slate-100">
          {children}
        </main>
        <Footer />
        <Analytics />
      </Theme>
    </>
  );
};

export default SignedInPage;
