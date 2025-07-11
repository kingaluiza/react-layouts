import React from "react";
import Navigation from "./Navigation";
import ErrorPage from "./ErrorPage";
import errorPages from "./errorData";

function ErrorApp() {
  return (
    <div className="bg-gray-900 text-white relative scroll-smooth">
      <Navigation />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        {errorPages.map((page) => (
          <ErrorPage
            key={page.id}
            id={page.id}
            title={page.title}
            description={page.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ErrorApp;
