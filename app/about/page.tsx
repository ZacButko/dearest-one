import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D1 - About",
};

const About = () => {
  return (
    <div className="prose text-slate-100 lg:prose-xl">
      <h1 className="text-slate-100">About Dearest One</h1>
      <p className="text-slate-100">
        This app is designed to help take care of you, the dearest one.
      </p>
      <p className="text-slate-100">
        Track habbits and meet your goals. Setup reminders and cheer on your
        friends. This is the app that&apos;s all about you.
      </p>
      <p></p>
      <p className="text-slate-100">
        For information on how we store and use data head over to{" "}
        <Link
          href="/privacy"
          className="text-sky-200 visited:text-indigo-400 hover:text-sky-500"
        >
          privacy policy
        </Link>
        .
      </p>
      <p className="text-slate-100">
        For information on rights when using the software head over to{" "}
        <Link
          href="/tos"
          className="text-sky-200 visited:text-indigo-400 hover:text-sky-500"
        >
          terms of service
        </Link>
        .
      </p>
      <p className="text-slate-100">
        Created by{" "}
        <a
          href="https://butko.io"
          className="text-sky-200"
          target="_blank"
          rel="noreferrer"
        >
          butko.io
        </a>
      </p>
    </div>
  );
};

export default About;
