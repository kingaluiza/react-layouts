import React from "react";

function ErrorPage({ id, icon, title, description }) {
  return (
    <section
      id={id}
      className="h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-white p-8 snap-start"
    >
      <div className="text-center max-w-md">
        {icon}
        <h1 className="text-4xl font-bold text-slate-100 mb-4">{title}</h1>
        <p className="text-lg text-slate-400">{description}</p>
      </div>
    </section>
  );
}

export default ErrorPage;
