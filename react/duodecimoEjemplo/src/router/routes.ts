import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
}

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:id",
};

export const routes: Routes = {
  ...switchRoutes,
  detail: (id: string) => generatePath("/detail/:id", { id }),
};
