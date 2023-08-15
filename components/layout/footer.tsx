import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { ReactNode } from "react";

const FooterBackground = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) => {
  if (session?.user)
    return (
      <div
        className={
          "absolute w-full border-t border-slate-600 bg-sky-900 py-5 text-center"
        }
      >
        {children}
      </div>
    );
  return (
    <div
      className={
        "absolute w-full border-t border-gray-700 bg-sky-950 py-5 text-center"
      }
    >
      {children}
    </div>
  );
};

export default async function Footer() {
  const session = await getServerSession(authOptions);
  return (
    <FooterBackground session={session}>
      <p className="text-gray-200">
        A lifestyle app by{" "}
        <a
          className="font-medium text-sky-200 underline transition-colors"
          href="https://butko.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          butko.io
        </a>
      </p>
    </FooterBackground>
  );
}
