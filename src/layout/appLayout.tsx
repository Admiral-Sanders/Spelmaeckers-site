import HomePage from "pages/homePage";
import * as React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import AppFooter from "./components/footer/footer";
import "./styles.scss";

interface Props {

}

const AppLayout: React.FC<Props> = () => {
  const location = useLocation();
  const [isHomePage] = React.useState(location.pathname === "/");
   
  return (
    <>
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
      { !isHomePage && <AppFooter /> }
    </>
  );
};

export default AppLayout;