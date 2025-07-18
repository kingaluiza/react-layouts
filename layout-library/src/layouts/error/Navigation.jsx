import React, { useEffect, useState } from "react";
import errorPages from "./errorData";
import { clsx } from "clsx";

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (index) => {
    setCurrentPage(index);
    document
      .getElementById(errorPages[index].id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          const index = errorPages.findIndex(
            (p) => p.id === visibleEntry.target.id
          );
          if (index !== -1) {
            setCurrentPage(index);
          }
        }
      },
      {
        threshold: 0.4,
      }
    );

    errorPages.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    if (index === hoveredIndex) return 3;
    if (Math.abs(index - hoveredIndex) === 1) return 1.7;
    return 1;
  };

  const getDotSize = (index) => {
    if (hoveredIndex === null) return { width: "12px", height: "12px" };
    if (index === hoveredIndex) return { width: "16px", height: "12px" };
    if (Math.abs(index - hoveredIndex) === 1)
      return { width: "14px", height: "12px" };
    return { width: "12px", height: "12px" };
  };

  const getMargin = (index) => {
    if (hoveredIndex === null) return "0px";
    if (index === hoveredIndex) return "8px";
    if (Math.abs(index - hoveredIndex) === 1) return "4px";
    return "0px";
  };

  return (
    <div
      className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-5 z-50"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {errorPages.map((item, index) => (
        <div
          key={item.id}
          className="group relative pr-8"
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <button
            onClick={() => handleClick(index)}
            aria-label={`Go to ${item.id}`}
            className={clsx(
              "nav-dot block w-3 h-3 shadow rounded-full origin-left",
              {
                "bg-slate-500 ring-1 ring-slate-300  text-slate-200":
                  index === currentPage,
                "bg-slate-200 text-slate-500": index !== currentPage,
              }
            )}
            style={{
              ...getDotSize(index),
              transform: `scale(${getScale(index)})`,
              transition:
                "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), margin 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              marginTop: getMargin(index),
              marginBottom: getMargin(index),
            }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center font-light "
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                fontSize: "0.35rem",
                lineHeight: "1",
                transition:
                  "opacity 0.3s ease-in-out, transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              {item.id}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
