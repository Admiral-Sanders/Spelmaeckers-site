import HomePage from "pages/homePage";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import AppFooter from "./components/footer/footer";
import "./styles.scss";

interface Props {

}

const AppLayout: React.FC<Props> = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
      <AppFooter />
    </>
  );
};

export default AppLayout;