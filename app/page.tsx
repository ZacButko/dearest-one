import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { SignInButton } from "@/components/layout/sign-in-modal";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ActivityCard from "@/components/home/activity-card";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <>
        <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          <h1
            className="animate-fade-up bg-gradient-to-br from-white to-stone-200 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            <Balancer>Welcome back</Balancer>
          </h1>
        </div>
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          {features.map(({ activityTitle, destination, icon }) => (
            <ActivityCard
              key={activityTitle}
              title={activityTitle}
              destination={destination}
              icon={icon}
            />
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-white to-stone-200 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Dearest One</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-300 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            An app to help you take care of you, the dearest one.
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <SignInButton size="3" variant="surface" />
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Track Water Intake",
    activityTitle: "Log Water",
    description: "Track the water you drink throughout the day.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="water.js logo"
          src="/do-logo-t-bg.png"
          width={100}
          height={100}
        />
      </div>
    ),
    icon: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="water.js logo"
          src="/do-logo-t-bg.png"
          width={90}
          height={90}
        />
      </div>
    ),
    large: false,
    destination: "/water",
  },
];
