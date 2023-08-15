import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Providers } from "./providers";
import Background, {
  loggedOutBackground,
} from "@/components/layout/background";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <Theme appearance="dark" accentColor="blue" grayColor="slate">
          <Providers>
            <Suspense fallback={loggedOutBackground}>
              {/* @ts-expect-error Server Component */}
              <Background />
            </Suspense>
            <Suspense fallback="...">
              {/* @ts-expect-error Server Component */}
              <Nav />
            </Suspense>
            <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
              {children}
            </main>
            <Suspense>
              {/* @ts-expect-error Server Component */}
              <Footer />
            </Suspense>
            <Analytics />
          </Providers>
        </Theme>
      </body>
    </html>
  );
}
