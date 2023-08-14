import SignedInPage from "@/components/layout/SignedInPage";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";
import Head from "next/head";

const About: NextPageWithLayout = () => {
  const session = useSession();
  return <>Hello {session.data?.user?.name}.</>;
};

About.getLayout = function getLayout(page: ReactNode) {
  return (
    <SignedInPage>
      <Head>
        <title>D1 - About</title>
      </Head>
      {page}
    </SignedInPage>
  );
};

export default About;
