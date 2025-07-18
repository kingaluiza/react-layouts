import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Error500({ id, icon, title, description }) {
  return (
    <section
      id={id}
      className="grid grid-cols-2 h-screen place-items-center snap-start bg-slate-100"
    >
      <div className="text-center px-20">
        <p className=" text-pink-600 text-xl font-semibold">{id}</p>
        <h1 className="mt-4 px-4 text-5xl font-medium tracking-tight text-balance text-slate-600 sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 text-lg font-extralight  text-pretty text-slate-400 sm:text-xl/8">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md inline-flex items-center text-pink-500 px-3.5 py-2.5 text-sm font-extralightshadow-xs hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home{" "}
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
      <div className="h-screen w-full bg-[url(/bg-500.avif)] bg-bottom bg-cover grayscale-50"></div>
    </section>
  );
}

export default Error500;
