import BentoApp from "./layouts/bento/BentoApp";
import ErrorApp from "./layouts/error/ErrorApp";

const routeMap = {
    // clean: CleanApp,
    // admin: AdminApp
    // auth: AuthApp,
    bento: BentoApp,
    // landing: LandingApp,
    error: ErrorApp,
};

export default routeMap;