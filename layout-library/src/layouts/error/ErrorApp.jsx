import Navigation from "./Navigation";
import errorPages from "./errorData";
import "./ErrorApp.css";

function ErrorApp() {
  return (
    <div className="relative scroll-smooth">
      <Navigation />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll hide-scrollbar">
        {errorPages.map((page, idx) => {
          const PageComponent = page.component;
          const Icon = page.icon;
          return (
            <div key={idx} id={page.id} className="snap-start h-screen">
              <PageComponent
                id={page.id}
                icon={<Icon />}
                title={page.title}
                description={page.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ErrorApp;
