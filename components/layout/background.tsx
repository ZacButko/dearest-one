import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const loggedOutBackground = (
  <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-sky-950 via-blue-950 to-sky-950" />
);

export default async function Background() {
  const session = await getServerSession(authOptions);
  if (session?.user)
    return (
      <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-sky-900 via-sky-800 to-sky-950" />
    );
  return loggedOutBackground;
}
