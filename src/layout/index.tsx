import HomePage from "pages/homePage";
import MenuPage from "pages/menuPage";
import * as React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import AppFooter from "./components/footer/footer";
import AppHeader from "./components/header/header";
import "./styles.scss";

interface Props {

}

const AppLayout: React.FC<Props> = () => {
  const location = useLocation();
  const [isHomePage] = React.useState(location.pathname === "/");

  return (
    <>
      { !isHomePage && <AppHeader /> }

      <Switch>
        <Route path="/" exact={true}><HomePage /></Route>
        <Route path="/menu"><MenuPage /></Route>
        <Route path="/"><Redirect to="/" /></Route>
      </Switch>

      { !isHomePage && <AppFooter /> }
    </>
  );
};

export default AppLayout;