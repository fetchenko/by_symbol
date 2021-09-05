import React from "react";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { Switch, Route } from "react-router-dom";
import { getLanguage } from "~/helpers/localization";
import { messages } from "~/translations";
import CustomThemeProvider from "~/theme/themeProvider";
import { printMessage } from "~/helpers/printMessage";
import Layout from "~/components/layout/page";
import { PAGES } from "~/constants/pages";

import "~/index.css";

printMessage();

const language = getLanguage();

function App() {
  return (
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]}>
        <CustomThemeProvider>
          <Layout>
            <Switch>
              {PAGES.map(({ path, Component, exact }) => (
                <Route key={path} exact={exact} path={path}>
                  <Component />
                </Route>
              ))}
            </Switch>
          </Layout>
        </CustomThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
