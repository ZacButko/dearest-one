import Navbar from "./navbar";
import { useSession } from "next-auth/react";

export function ClientNav() {
  const session = useSession();
  return <Navbar session={session.data} />;
}
