import React from "react";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";

function Error404({ id, icon, title, description }) {
  return (
    <section
      id={id}
      className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-[url(/bg-404.avif)] bg-cover grayscale-50 snap-start"
    >
      <div className="text-center p-16 rounded-4xl backdrop-blur-[2px]">
        <p className=" text-pink-600 text-xl font-semibold">{id}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-slate-100 sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 text-lg font-extralight text-pretty text-slate-400 sm:text-xl/8">
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
            className="rounded-md inline-flex items-center bg-pink-600 px-3.5 py-2.5 text-sm font-extralight text-white shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

export default Error404;
