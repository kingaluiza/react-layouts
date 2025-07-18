import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

function Error400({ id, icon, title, description }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize flashlight position in the top-left corner
    container.style.setProperty("--mouseX", `0px`);
    container.style.setProperty("--mouseY", `0px`);

    const handleMouseMove = (event) => {
      const { left, top } = container.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;

      container.style.setProperty("--mouseX", `${x}px`);
      container.style.setProperty("--mouseY", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden cursor-none flashlight-container"
    >
      <div className="grid inset-0 min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center px-20">
          <p className=" text-slate-950 text-xl font-semibold tracking-widest uppercase">
            {title}
          </p>
          <h1 className="mt-4 px-4 text-9xl font-thin tracking-wide text-balanced  text-sky-600">
            {id}
          </h1>
          <p className="mt-6 text-lg font-thin  text-pretty text-slate-950 sm:text-xl/8">
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
              className="rounded-xs inline-flex items-center px-3.5 py-2.5 text-sm font-extralight cursor-pointer text-sky-100 shadow-xs bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Go back home{" "}
              <span className="ml-2">
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 flashlight-overlay"></div>
      </div>

      {/* Text always visible in the top-left corner */}
      <div className="absolute top-4 left-4 z-50">
        <h3 className="text-xl font-thin text-gray-300 select-none">
          Nothing to see here... or is there?
        </h3>
      </div>
    </div>
  );
}

export default Error400;

// import React, { useState, useEffect, useRef } from "react";

// export default function FlashlightPage() {

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-96 max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-2xl border border-blue-500/30 overflow-hidden cursor-none flashlight-container"
//     >
//       {/* Content to be "discovered" in the dark */}
//       <div className="absolute inset-0 flex items-center justify-center p-8">
//         <h3 className="text-3xl font-bold text-gray-400 select-none text-center">
//           Nothing to see here... or is there?
//         </h3>
//       </div>
//       <p className="absolute top-[20%] left-[15%] text-gray-600 select-none font-mono text-lg">
//         SyntaxError
//       </p>
//       <p className="absolute bottom-[25%] right-[20%] text-gray-600 select-none font-mono text-lg">
//         Unexpected Token
//       </p>
//       <p className="absolute top-[15%] right-[15%] text-gray-600 select-none font-mono text-4xl">
//         400
//       </p>
//       <p className="absolute bottom-[15%] left-[20%] text-gray-600 select-none font-mono text-lg">
//         Bad Request
//       </p>

//       {/* The flashlight overlay itself. The magic happens in the CSS. */}
//       <div className="absolute inset-0 flashlight-overlay"></div>
//     </div>
//   );
// }
