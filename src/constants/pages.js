import SymbolPage from "~/pages/symbols";
import SourcesPages from "~/pages/sources";
import AboutPage from "~/pages/about";
import HomePage from "~/pages/home";
import TestUi from "~/pages/test-ui";

export const PAGES = [
  {
    Component: SourcesPages,
    path: "/sources",
    exact: true,
  },
  {
    Component: AboutPage,
    path: "/about",
    exact: true,
  },
  // {
  //   Component: HomePage,
  //   path: "/",
  //   exact: true,
  // },
  // {
  //   Component: TestPage,
  //   path: "/test",
  //   exact: true,
  // },
  {
    Component: SymbolPage,
    path: "/:symbolId?",
    exact: true,
  },
  {
    Component: TestUi,
    path: "/ui",
    exact: true,
  },
];
