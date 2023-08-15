"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { Button } from "@radix-ui/themes";
import { ReactNode } from "react";

const NavBackground = ({
  children,
  session,
  scrolled,
}: {
  children: ReactNode;
  session: Session | null;
  scrolled: boolean;
}) => {
  if (session?.user)
    return (
      <div
        className={`fixed top-0 flex w-full justify-center border-slate-500 ${
          scrolled
            ? "border-b-2 bg-sky-900/50 backdrop-blur-xl"
            : "border-b-0 bg-sky-900/0"
        } z-30 transition-all`}
      >
        {children}
      </div>
    );
  return (
    <div
      className={`fixed top-0 flex w-full justify-center border-gray-700 ${
        scrolled
          ? "border-b-2 bg-sky-950/50 backdrop-blur-xl"
          : "border-b-0 bg-sky-950/0"
      } z-30 transition-all`}
    >
      {children}
    </div>
  );
};

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <NavBackground {...{ session, scrolled }}>
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/do-logo-120-t-bg.png"
              alt="Dearest One logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Dearest One</p>
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <Button
                radius="full"
                size="2"
                onClick={() => setShowSignInModal(true)}
              >
                <span className="font-bold">Sign In</span>
              </Button>
            )}
          </div>
        </div>
      </NavBackground>
    </>
  );
}
