import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Error403({ id, icon, title, description }) {
  return (
    <section
      id={id}
      className="grid grid-cols-2 h-screen place-items-center snap-start bg-black"
    >
      <div className="h-screen w-full bg-[url(/bg-403.avif)] bg-center bg-cover grayscale-75"></div>
      <div className="text-center px-20">
        <p className=" text-slate-200 text-xl font-thin tracking-widest uppercase">
          {title}
        </p>
        <h1 className="mt-4 px-4 text-9xl font-thin tracking-wide text-balanced  text-sky-400">
          {id}
        </h1>
        <p className="mt-6 text-lg font-thin  text-pretty text-slate-300 sm:text-xl/8">
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
            className="rounded-xs inline-flex items-center border border-white px-3.5 py-2.5 text-sm font-extralight text-white shadow-xs hover:border-sky-400 hover:text-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Go back home{" "}
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Error403;
