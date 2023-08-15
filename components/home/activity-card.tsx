import Link from "next/link";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function ActivityCard({
  title,
  icon,
  destination,
}: {
  title: string;
  destination: string;
  icon: ReactNode;
}) {
  return (
    <Link href={destination}>
      <div
        className={`relative col-span-1 overflow-hidden rounded-xl border border-gray-600 bg-slate-800 shadow-lg`}
      >
        <div className="flex items-center justify-start gap-6 px-8 py-6">
          {icon}
          <h2 className="bg-gradient-to-br from-white to-stone-200 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
            <Balancer>{title}</Balancer>
          </h2>
        </div>
      </div>
    </Link>
  );
}
